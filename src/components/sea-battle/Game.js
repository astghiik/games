import React from 'react';
import Table from 'react-bootstrap/Table';


function GameSB(props) {
    let tBody = [];
    
    for (let i = 0; i < 10; i++) {
        let tr = [];

        for (let j = 0; j < 10; j++) {
            tr.push(<th></th>);
        }

        tBody.push(<tr>{tr}</tr>)
    }

    return (
        <Table bordered className="w-25 m-auto">
            <tbody>
                {tBody}
            </tbody>
        </Table>
    )
}

export default GameSB;