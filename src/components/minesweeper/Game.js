import React from 'react';
import { connect } from 'react-redux';
import { setMines } from '../../actions/minesweeper';
import { bindActionCreators } from 'redux';
import NewGame from './Base';


function Game(props) {
    let { minesCoordinates, setMines } = props;
    let body = [];
    
    for (let i = 0; i < 600; i++) {
        body.push(
            <div className='border float-left rounded bg-info' style={{width: '25px', height: '25px'}}>
                {minesCoordinates.includes(i) ? 'x' : ''}
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
        minesCoordinates: state.minesweeper.minesCoordinates
    }
}


export default connect(mapStateToProps)(Game);