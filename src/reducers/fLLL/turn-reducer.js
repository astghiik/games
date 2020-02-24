export const turnReducer = (state = '', action) => {
    switch (action.type) {
        case 'NEXT_GAMER':
            return action.payload;
        
        default:
            return state;
    }
}