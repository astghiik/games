import { combineReducers } from 'redux';
import { numbersReducer, minesReducer, flagsReducer, openedAreaReducer } from './mines-reducer';

export const minesweeper = combineReducers({
    numbers: numbersReducer,
    minesCoordinates: minesReducer,
    flags: flagsReducer,
    openedArea: openedAreaReducer
})