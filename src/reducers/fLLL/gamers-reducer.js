export const gamersReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_GAMERS_NAMES':
            return action.payload;
            
        case 'CLEAR':
            return state = [];

        default:
            return state;
    }
}