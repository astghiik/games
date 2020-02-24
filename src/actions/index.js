export const addNames = names => {
    return {
        type:'ADD_GAMERS_NAMES',
        payload: names
    }
}

export const startGame = temp => {
    return {
        type: 'IS_STARTING',
        payload: temp
    }
}

export const addNewWord = word => {
    return {
        type: 'NEW_WORD',
        payload: word
    }
}

export const next = gamer => {
    return {
        type: 'NEXT_GAMER',
        payload: gamer
    }
}