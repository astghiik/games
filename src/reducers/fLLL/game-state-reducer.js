export const gameStateReducer = (state = false, action) => {
    switch(action.type) {
        case 'IS_STARTING':
            return true;

        default:
            return state;
    }
}