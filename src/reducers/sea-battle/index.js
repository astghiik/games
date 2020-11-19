import { combineReducers } from 'redux';
import { shipsCoordinatesReducer } from './sea-battle-reducer';


export const seaBattle = combineReducers({
    shipsCoordinates: shipsCoordinatesReducer
})