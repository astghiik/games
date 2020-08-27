import React from 'react';
import Gamer from './Gamer';
import Computer from './Computer';


function Game(props) {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Gamer />
            <Computer />

        </div>
    )
}

export default Game;