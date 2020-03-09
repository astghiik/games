export const setMines = coordinates => {
    return {
        type: 'SET_MINES',
        payload: coordinates
    }
}

export const setFlag = field => {
    return {
        type: 'SET_FLAG',
        payload: field
    }
}

export const removeFlag = field => {
    return {
        type: 'REMOVE_FLAG',
        payload: field
    }
}

export const openArea = field => {
    return {
        type: 'OPEN',
        payload: field
    }
}