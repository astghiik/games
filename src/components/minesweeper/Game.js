import React from 'react';
import { connect } from 'react-redux';
import NewGame, { createField } from './NewGame';
import { bindActionCreators } from 'redux';
import { setNumbers, setFlag, removeFlag, openArea } from '../../actions/minesweeper';


function Game(props) {
    let { minesCoordinates, numbers, flags, setFlag, removeFlag, openArea, openedArea } = props;
    let body = [];
    let opened = [...openedArea];

    function openField (e, f = e.currentTarget.dataset.i)  {
        if (arguments.length === 1) e.preventDefault();
        
        for (let i = 0; i < arguments.length; i++) {
            let field = arguments.length === 1 ? f : arguments[i];
            let number = numbers.find(arr => arr[0] === +field);

            if (opened.includes(field) || flags.includes(field) || +field < 0 || +field > 599) continue;
       
            if (!number) {  
                if (field % 30 === 0) {
                    if (+field === 0) {
                        opened.push(field);
                        openField(`${+field + 1}`, `${+field + 30}`, `${+field + 31}`);
                    } else if (+field === 570) {
                        opened.push(field);
                        openField(`${+field - 30}`, `${+field - 29}`, `${+field + 1}`);
                    } else {
                        opened.push(field);
                        openField(`${+field - 30}`, `${+field - 29}`, `${+field + 1}`, `${+field + 30}`, `${+field + 31}`);
                    }
                } else if ((+field + 1) % 30 === 0) {
                    if (+field === 29) {
                        opened.push(field);
                        openField(`${+field - 1}`, `${+field + 29}`, `${+field + 30}`);
                    } else if (+field === 599) {
                        opened.push(field);
                        openField(`${+field - 1}`, `${+field - 30}`, `${+field - 31}`);
                    } else {
                        opened.push(field);
                        openField(`${+field - 30}`, `${+field - 31}`, `${+field - 1}`, `${+field + 29}`, `${+field + 30}`);
                    }
                } else if (+field < 29) {
                    opened.push(field);
                    openField(`${+field - 1}`, `${+field + 1}`, `${+field + 29}`, `${+field + 30}`, `${+field + 31}`);
                } else if (+field > 570) {
                    opened.push(field);
                    openField(`${+field - 1}`, `${+field + 1}`, `${+field - 29}`, `${+field - 30}`, `${+field - 31}`);
                } else {
                    opened.push(field);
                    openField(`${+field - 30}`, `${+field - 31}`, `${+field - 29}`, `${+field - 1}`, `${+field + 1}`, `${+field + 29}`, `${+field + 30}`, `${+field + 31}`);
                }
            } else {
                opened.push(field);
            }
        }
        openArea(opened);
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
                <div className={openedArea.includes(i + '') ? 'visible' : 'invisible'}>
                    {createField(i, minesCoordinates, openedArea)}
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
        numbers: state.minesweeper.numbers,
        minesCoordinates: state.minesweeper.minesCoordinates,
        flags: state.minesweeper.flags,
        openedArea: state.minesweeper.openedArea
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ setNumbers, setFlag, removeFlag, openArea }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Game);