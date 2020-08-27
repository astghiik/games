import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export function MinesweeperCard() {
    return (
        <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Img variant="top" src={require("../images/minesweeper.png")} />
            <Card.Body>
                <Card.Title>Minesweeper</Card.Title>
                <Card.Text>
                    The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without
                    detonating any of them, with help from clues about the number of neighboring mines
                in each field.. <a href="https://en.wikipedia.org/wiki/Minesweeper_(video_game)" target="_blank">More...</a>
                </Card.Text>
                <Link to='/minesweeper'>
                    <Button variant="primary">Play ></Button></Link>
            </Card.Body>
        </Card>
    )
}


export function SeaBattleCard() {
    return (
        <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Img variant="top" src={require("../images/sea-battle.jpg")} />
            <Card.Body>
                <Card.Title>Sea Battle</Card.Title>
                <Card.Text>
                    Sea Battle is a multiplayer strategy game released by Mattel for its Intellivision
                    video game system in 1980. <a href="https://en.wikipedia.org/wiki/Sea_Battle" target="_blank">More...</a>
                </Card.Text>
                <Link to='/sea-battle'>
                    <Button variant="primary">Play ></Button></Link>
            </Card.Body>
        </Card>
    )
}

export function CitiesCard() {
    return (
        <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Img variant="top" src={require("../images/last-letter.png")} />
            <Card.Body>
                <Card.Title>First Letter, Last Letter</Card.Title>
                <Card.Text>
                    Pick a category. Choose a word in the category.
                    Take the last letter of that word and make a new word starting with that letter. Repeat.
                </Card.Text>
                <Link to='/first-letter-last-letter'>
                    <Button variant="primary">Play ></Button></Link>
            </Card.Body>
        </Card>
    )
}

