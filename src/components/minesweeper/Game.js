import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import NewGame, { createField } from './NewGame';
import Time from './Time';
import { bindActionCreators } from 'redux';
import { setFlag, removeFlag, openArea, gameState } from '../../actions/minesweeper';


let alertMessage = {};

function Game(props) {
    let {   
            start,
            minesCoordinates,
            numbers, 
            flags, 
            setFlag, 
            removeFlag, 
            openArea, 
            openedArea, 
            gameState 
        } = props;
    let body = [];
    let opened = [...openedArea];

    function openField (e, f = +e.currentTarget.dataset.i)  {
        if (arguments.length === 1) e.preventDefault();

        if (minesCoordinates.includes(f) && !flags.includes(f) && start) {    // game over         
            Object.assign(alertMessage, { variant: 'danger', text: 'Game Over' });
            opened = opened.concat(minesCoordinates);
            gameState(false);
            openArea(opened);
            return;
        }

        for (let i = 0; i < arguments.length; i++) {
            let field = arguments.length === 1 ? f : arguments[i];

            if (opened.includes(field) || flags.includes(field) || field < 0 || field > 599) continue;
       
            if (!numbers.includes(field)) {  
                if (field % 30 === 0) {
                    if (field === 0) {
                        opened.push(field);
                        openField(field + 1, field + 30, field + 31);
                    } else if (field === 570) {
                        opened.push(field);
                        openField(field - 30, field - 29, field + 1);
                    } else {
                        opened.push(field);
                        openField(field - 30, field - 29, field + 1, field + 30, field + 31);
                    }
                } else if ((field + 1) % 30 === 0) {
                    if (field === 29) {
                        opened.push(field);
                        openField(field - 1, field + 29, field + 30);
                    } else if (field === 599) {
                        opened.push(field);
                        openField(field - 1, field - 30, field - 31);
                    } else {
                        opened.push(field);
                        openField(field - 30, field - 31, field - 1, field + 29, field + 30);
                    }
                } else if (field < 29) {
                    opened.push(field);
                    openField(field - 1, field + 1, field + 29, field + 30, field + 31);
                } else if (field > 570) {
                    opened.push(field);
                    openField(field - 1, field + 1, field - 29, field - 30, field - 31);
                } else {
                    opened.push(field);
                    openField(field - 30, field - 31, field - 29, field - 1, field + 1, field + 29, field + 30, field + 31);
                }
            } else {
                opened.push(field);
            }
        }

        openArea(opened);

        if (opened.length === 520) {
            gameState(false);
            return;
        }

    }

    const flag = e => {
        e.preventDefault();
        let field = +e.currentTarget.dataset.i;
        if (openedArea.includes(field)) return;

        if (!flags.includes(field)) {
            setFlag(field);
        } else {
            removeFlag(field);
        }
    }

    const showResult = t => {
        Object.assign(alertMessage, { variant: 'success', text: `Well Done! Your result is ${t}` });
    }
    
    
    console.log(alertMessage)
    for (let i = 0; i < 600; i++) {
        body.push(
            <div
                className={`float-left rounded bg-${openedArea.includes(i) ? 'white': flags.includes(i) ? 'danger border' : 'secondary border'}`}
                onContextMenu={start ? flag : null} 
                onClick={start ? openField : null}
                style={{width: '25px', height: '25px', userSelect: 'none'}}
                data-i={i}
                key={i}
            >
                <div className={openedArea.includes(i) ? 'visible' : 'invisible'}>
                    {createField(i, minesCoordinates, openedArea)}
                </div>
            </div>
        )
    }

    return (
        <div className='text-center mx-auto mt-5' style={{width: '750px'}}>
            <Alert variant={alertMessage.variant} className={`d-${start ? 'none' : 'block'}`}>{alertMessage.text}</Alert>
            {body}
            <div className='d-inline-flex'>
                <Time showResult={showResult} />
                <NewGame />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        start: state.minesweeper.start,
        numbers: state.minesweeper.numbers,
        minesCoordinates: state.minesweeper.minesCoordinates,
        flags: state.minesweeper.flags,
        openedArea: state.minesweeper.openedArea
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ setFlag, removeFlag, openArea, gameState }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Game);