import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { connect } from 'react-redux';

function List(props) {
    const list = props.words.map(word => {
        return <ListGroup.Item key={word}>{word}</ListGroup.Item>
    })

    return (
        <ListGroup className="w-50 mx-auto mt-2">
            {list.reverse()}
        </ListGroup>
    )
}

const mapStateToProps = state => {
    return {
        words: state.fLLL.words
    }
}

export default connect(mapStateToProps)(List);