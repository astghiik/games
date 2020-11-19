import React from 'react';
import Table from 'react-bootstrap/Table';


function Computer() {
    let tBody = [];

    for (let i = 0; i < 10; i++) {
        let tr = [];

        for (let j = 0; j < 10; j++) {
            tr.push(<th className="bg-info" data-n={i * 10 + j} key={j}></th>);
        }

        tBody.push(<tr key={i}>{tr}</tr>)
    }

    return (
        <Table bordered className="w-25 m-5">
            <tbody>
                {tBody}
            </tbody>
        </Table>
    )
}


export default Computer;