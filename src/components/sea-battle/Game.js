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
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Table bordered className="w-25 m-5">
                <tbody>
                    {tBody}
                </tbody>
            </Table>
            <Table bordered className="w-25 m-5">
                <tbody>
                    {tBody}
                </tbody>
            </Table>

        </div>
    )
}

export default GameSB;