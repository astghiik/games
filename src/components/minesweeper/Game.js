import React from 'react';
import { connect } from 'react-redux';
import NewGame from './Base';
import { bindActionCreators } from 'redux';
import { setFlag, removeFlag, openArea } from '../../actions/minesweeper';


const createField = (f, mines) => {
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
  
    return q === 0 ? '' : q;
}

function Game(props) {
    let { minesCoordinates, flags, setFlag, removeFlag, openArea, openedArea } = props;
    let body = [];

    const openField = e => {
        e.preventDefault();

        let field = e.currentTarget.dataset.i;

        if (!flags.includes(field) && !openedArea.includes(field)) {
            openArea(field);
        }
    }

    const flag = e => {
        e.preventDefault();
        let field = e.currentTarget.dataset.i;
        if (openedArea.includes(field)) return;

        if (!flags.includes(field)) {
            setFlag(field);
        } else {
            removeFlag(field);
        }
    }

    for (let i = 0; i < 600; i++) {
        body.push(
            <div
                className={`float-left rounded bg-${openedArea.includes(i + '') ? 'white': flags.includes(i + '') ? 'danger border' : 'secondary border'}`}
                onContextMenu={flag} 
                onClick={openField}
                style={{width: '25px', height: '25px'}}
                data-i={i}
                key={i}
            >
                <div 
                    className={openedArea.includes(i + '') ? 'visible' : 'invisible'}
                >
                    {createField(i, minesCoordinates)}
                </div>
            </div>
        )
    }
    

    return (
        <div className='text-center  mx-auto mt-5' style={{width: '750px'}}>
            {body}
            <NewGame/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        minesCoordinates: state.minesweeper.minesCoordinates,
        flags: state.minesweeper.flags,
        openedArea: state.minesweeper.openedArea
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ setFlag, removeFlag, openArea }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Game);