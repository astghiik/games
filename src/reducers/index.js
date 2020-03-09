import { combineReducers } from 'redux';
import { fLLL } from './fLLL';
import { minesweeper } from './minesweeper';

export const allReducers = combineReducers({
    fLLL,
    minesweeper,
})