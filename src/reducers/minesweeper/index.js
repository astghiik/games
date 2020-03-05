import { combineReducers } from 'redux';
import { minesReducer } from './mines-reducer';

export const minesweeper = combineReducers({
    minesCoordinates: minesReducer
})