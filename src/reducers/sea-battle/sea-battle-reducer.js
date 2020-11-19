export const shipsCoordinatesReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_SHIPS":
            return action.payload;

        default:
            return state;
    }
}