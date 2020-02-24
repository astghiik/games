import React from 'react';
import { CitiesCard, SeaBattleCard } from './cards';

function Home () {
    return (
        <div className="d-flex text-center mt-5">
            <SeaBattleCard />
            <CitiesCard/>
        </div>
    )
}

export default Home;