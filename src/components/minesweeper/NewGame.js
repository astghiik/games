import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import {
  setMines,
  setNumbers,
  newGame,
  gameState,
} from "../../actions/minesweeper";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

let n = [];
export const createField = (f, mines, area) => {
  if (mines.includes(f)) return <div className="text-danger">x</div>;

  let q = 0;
  if (f === 0) {
    if (mines.includes(f + 1)) q++;
    if (mines.includes(f + 30)) q++;
    if (mines.includes(f + 31)) q++;
  } else if (f === 29) {
    if (mines.includes(f - 1)) q++;
    if (mines.includes(f + 29)) q++;
    if (mines.includes(f + 30)) q++;
  } else if (f === 570) {
    if (mines.includes(f - 29)) q++;
    if (mines.includes(f - 30)) q++;
    if (mines.includes(f + 1)) q++;
  } else if (f === 599) {
    if (mines.includes(f - 30)) q++;
    if (mines.includes(f - 31)) q++;
    if (mines.includes(f - 1)) q++;
  } else if (f < 29) {
    if (mines.includes(f + 29)) q++;
    if (mines.includes(f + 30)) q++;
    if (mines.includes(f + 31)) q++;
    if (mines.includes(f - 1)) q++;
    if (mines.includes(f + 1)) q++;
  } else if (f > 570) {
    if (mines.includes(f - 29)) q++;
    if (mines.includes(f - 30)) q++;
    if (mines.includes(f - 31)) q++;
    if (mines.includes(f - 1)) q++;
    if (mines.includes(f + 1)) q++;
  } else if (f % 30 === 0) {
    if (mines.includes(f - 29)) q++;
    if (mines.includes(f - 30)) q++;
    if (mines.includes(f + 30)) q++;
    if (mines.includes(f + 31)) q++;
    if (mines.includes(f + 1)) q++;
  } else if ((f + 1) % 30 === 0) {
    if (mines.includes(f - 30)) q++;
    if (mines.includes(f - 31)) q++;
    if (mines.includes(f + 29)) q++;
    if (mines.includes(f + 30)) q++;
    if (mines.includes(f - 1)) q++;
  } else {
    if (mines.includes(f - 31)) q++;
    if (mines.includes(f - 30)) q++;
    if (mines.includes(f - 29)) q++;
    if (mines.includes(f + 29)) q++;
    if (mines.includes(f + 30)) q++;
    if (mines.includes(f + 31)) q++;
    if (mines.includes(f - 1)) q++;
    if (mines.includes(f + 1)) q++;
  }

  if (q === 0) return "";

  const setColor = (q) => {
    return [
      "primary",
      "dark",
      "danger",
      "success",
      "warning",
      "info",
      "secondary",
      "danger",
    ][q - 1];
  };

  n.push(f);
  let cn = area.includes(f) ? `visible text-${setColor(q)}` : "invisible";

  return <div className={cn}>{q}</div>;
};

function NewGame(props) {
  n = [];
  let coordinates = [];
  const { setNumbers, setMines, newGame, gameState } = props;

  for (let i = 0; i < 80; i++) {
    let c = Math.floor(Math.random() * 600);
    if (!coordinates.includes(c)) {
      coordinates.push(c);
    } else {
      i--;
    }
  }

  const handleBtnClick = () => {
    newGame(); // reset
    n = [];
    setNumbers(n);
    setMines(coordinates);
    gameState(true);
  };

  useEffect(() => handleBtnClick(), []);

  return (
    <Button variant="primary" className="m-1" onClick={handleBtnClick}>
      New Game
    </Button>
  );
}

const mapStateToProps = (state) => {
  return {
    minesCoordinates: state.minesweeper.minesCoordinates,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setMines, setNumbers, newGame, gameState },
    dispatch
  );
};

export default connect(mapStateToProps, matchDispatchToProps)(NewGame);
