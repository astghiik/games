import React from 'react';
import { CitiesCard, SeaBattleCard, Minesweeper } from './cards';

function Home () {
    return (
        <div className="d-flex text-center">
            <Minesweeper />
            <SeaBattleCard />
            <CitiesCard />
        </div>
    )
}

export default Home;