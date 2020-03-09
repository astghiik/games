import { combineReducers } from 'redux';
import { minesReducer, flagsReducer, openedAreaReducer } from './mines-reducer';

export const minesweeper = combineReducers({
    minesCoordinates: minesReducer,
    flags: flagsReducer,
    openedArea: openedAreaReducer
})