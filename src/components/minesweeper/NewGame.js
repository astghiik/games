import React from 'react'
import Button from 'react-bootstrap/Button';
import { setMines, setNumbers } from '../../actions/minesweeper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


let n = [];
export const createField = (f, mines, area) => {
    if (mines.includes(f)) return 'x';
    
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
        if (mines.includes(f - 29)) q++;  
        if (mines.includes(f - 30)) q++;      
        if (mines.includes(f - 31)) q++; 
        if (mines.includes(f + 29)) q++;
        if (mines.includes(f + 30)) q++;
        if (mines.includes(f + 31)) q++;
        if (mines.includes(f - 1)) q++;
        if (mines.includes(f + 1)) q++;
    }

    // let textColor;
    
    // // return q === 0 ? '' : q;
    if (q === 0) return '';
    // } else if (q === 1) {
    //     textColor = 'primary';
    // } else if (q === 2) {
    //     textColor = 'dark';
    // } else if (q === 3) {
    //     textColor = 'danger';
    // } else if (q === 4) {
    //     textColor = 'success';
    // } else if (q === 5) {
    //     textColor = 'warning';
    // } else if (q === 6) {
    //     textColor = 'info';
    // } else if (q === 7) {
    //     textColor = 'secondary';
    // } else {
    //     textColor = 'danger';
    // }

    const setColor = q => {
        return ['primary', 'dark', 'danger', 'success', 'warning', 'info', 'secondary', 'danger'][q - 1];
    }
    
   //setNumbers([f, q])
    n.push([f, q]);
    
    //console.log([f, q])
    let cn = area.includes(f + '') ? `visible text-${setColor(q)}` : 'invisible';
    return (
        <div className={cn}>
            {q}
        </div>
    )
}

function NewGame(props) {
    let coordinates = [];
    const { setNumbers, setMines } = props;

    for (let i = 0; i < 80; i++) {
        coordinates.push(Math.floor(Math.random() * 600));
    }
    
    return (
        <Button 
            variant='primary' 
            className='mt-1' 
            onClick={() => {
                setMines(coordinates);
                setNumbers(n);
            }}
        >
            New
        </Button>
    )
}

const mapStateToProps = state => {
    return {
        minesCoordinates: state.minesweeper.minesCoordinates
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ setMines, setNumbers }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(NewGame);