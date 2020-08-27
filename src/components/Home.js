import React from 'react';
import { CitiesCard, SeaBattleCard, MinesweeperCard } from './cards';

function Home() {
    return (
        <div className="d-flex text-center">
            <MinesweeperCard />
            <SeaBattleCard />
            <CitiesCard />
        </div>
    )
}

export default Home;