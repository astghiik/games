import React from 'react'
import Button from 'react-bootstrap/Button';
import { setMines } from '../../actions/minesweeper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function NewGame(props) {
    let coordinates = [];

    for (let i = 0; i < 60; i++) {
        coordinates.push(Math.floor(Math.random() * 600));
    }
    
    return (
        <Button variant='primary' className='mt-1' onClick={() => props.setMines(coordinates)}>New</Button>
    )
}

const mapStateToProps = state => {
    return {
        minesCoordinates: state.minesweeper.minesCoordinates
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ setMines }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(NewGame);