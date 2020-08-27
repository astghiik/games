import { combineReducers } from 'redux';
import { fLLL } from './first-letter-last-letter';
import { minesweeper } from './minesweeper';

export const allReducers = combineReducers({
    fLLL,
    minesweeper,
})