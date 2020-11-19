import { combineReducers } from 'redux';
import { fLLL } from './first-letter-last-letter';
import { minesweeper } from './minesweeper';
import { seaBattle } from './sea-battle';

export const allReducers = combineReducers({
    fLLL,
    minesweeper,
    seaBattle
})