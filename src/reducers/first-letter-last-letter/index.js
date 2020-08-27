import { gamersReducer } from './gamers-reducer';
import { combineReducers } from 'redux';
import { gameStateReducer } from './game-state-reducer';
import { wordsReducer } from './words-reducer';
import { turnReducer } from './turn-reducer';

export const fLLL = combineReducers({
    start: gameStateReducer,
    gamers: gamersReducer,
    words: wordsReducer,
    turn: turnReducer
})