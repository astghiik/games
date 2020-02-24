import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewWord, next } from '../../actions';

function GameFLLL(props) {
    let [word, setWord] = useState('');
    const [show, setShow] = useState(false);   // alert
    const [alert, setAlert] = useState('');

    const { words, gamers, turn, addNewWord, next } = props;

    const handleChange = e => {
        setWord(e.target.value);
    }

    const handleClickButton = () => {
        word = word.trim();
        if (!word) {
            setAlert('The field is empty');
            setShow(true);
            setWord('');   // spaces.trim()
        } else if (!words.length) {
            addNewWord(word);
            next(gamers[1]);
            setWord(word[word.length - 1]);
            setShow(false);
        } else {
            const prevCity = words[words.length - 1];
            const startLetter = prevCity[prevCity.length - 1];
            setShow(false);

            if (!words.includes(word) && word[0] === startLetter) {
                addNewWord(word);
                next(gamers[0] !== turn ? gamers[0] : gamers[1]);
                setWord(word[word.length - 1]);
            } else {
                setAlert(word[0] !== startLetter ? `The word must start with "${startLetter}".` : `it's already been.`);
                setShow(true)
                setWord(startLetter);
            }
        }
        
    }

    
    const enter = e => {
        if (e.keyCode === 13) handleClickButton();
    }


    
    function AlertDismissibleExample() {
        if (show) {
            return (
                <Alert variant="danger" className="w-50 mx-auto" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Nope!</Alert.Heading>
                <p>
                    {alert}
                </p>
                </Alert>
            );
        }

        return null; 
    }

    return (
        <div>
            <AlertDismissibleExample />
            <InputGroup className={`w-50 mx-auto d-${!props.start ? 'none' : null}`}>
                <InputGroup.Prepend>
                    <InputGroup.Text>{`${turn || gamers[0]}'s turn`}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={handleChange}
                    onKeyDown={enter}
                    value={word}
                />
                <Button className="ml-1 w-25" onClick={handleClickButton}>Next</Button>
            </InputGroup>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        start: state.fLLL.start,
        words: state.fLLL.words,
        gamers: state.fLLL.gamers,
        turn: state.fLLL.turn
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ addNewWord, next }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(GameFLLL);