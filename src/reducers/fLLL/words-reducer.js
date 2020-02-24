export const wordsReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_WORD':
            // if (!state.includes(action.payload))
                return [...state, action.payload];
            // else 
            //     alert('nope');
            //     return state;

        default:
            return state;
    }
}