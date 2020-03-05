export const turnReducer = (state = '', action) => {
    switch (action.type) {
        case 'NEXT_GAMER':
            return action.payload;

        case 'CLEAR':
            return state = '';
        
        default:
            return state;
    }
}