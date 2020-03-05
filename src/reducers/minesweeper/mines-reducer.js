export const minesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MINES':
            return action.payload;
        
        default:
            return state;
    }
}