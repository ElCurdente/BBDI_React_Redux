import { ADD_MESSAGE , SET_COUNT, SET_MESSAGE, SET_NUMBER, PLAY, SET_DICE } from '../constants/actions';

// on prépare de petites fonctions anonymes pour le dispatcher
export const addMessage = payload => {
    return {
        type: ADD_MESSAGE, payload: payload
    }
};

export const set_message = payload => {
    return {
        type: SET_MESSAGE, payload
    }
};

export const set_count = () => {
    return {
        type: SET_COUNT
    }
};

export const set_number = payload => {
    return {
        type: SET_NUMBER, payload: payload
    }
}

export const play = () => {
    return {
        type: PLAY
    }
}

export const set_dice = (payload_1, payload_2, payload_3) => {
    return {
        type: SET_DICE, payload_1, payload_2, payload_3
    }
}