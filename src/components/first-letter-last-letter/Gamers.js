import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { addNames, startGame } from '../../actions';
import { connect } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Gamers(props) {
    const [gamer1, setGamer1] = useState('gamer 1');
    const [gamer2, setGamer2] = useState('gamer 2');
    const [display, setDisplay] = useState();
    const { addNames, startGame } = props;

    const handleChange1 = e => {
        setGamer1(e.target.value);
    }

    const handleChange2 = e => {
        setGamer2(e.target.value);
    }

    const handleConfirm = () => {
        addNames([gamer1, gamer2]);
        setDisplay('none');
        startGame();
    }

    return (
        // <form style={{display:style}}>
        //     <input onChange={handleChange1} placeholder="gamer 1"/>
        //     <input onChange={handleChange2} placeholder="gamer 2"/>
        //     <button type="button" onClick={handleConfirm}>confirm</button>
        // </form>
        <InputGroup className={`w-50 mx-auto d-${display}`}>
            <InputGroup.Prepend>
                <InputGroup.Text>Add Gamers' Names</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={handleChange1} placeholder="gamer 1" />
            <FormControl onChange={handleChange2} placeholder="gamer 2" />
            <InputGroup.Append>
                <Button onClick={handleConfirm}>Confirm</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}


const matchDispatchToProps = dispatch => {
    return bindActionCreators({ addNames, startGame }, dispatch);
}

export default connect(null, matchDispatchToProps)(Gamers);