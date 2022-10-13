import { ADD_MESSAGE , SET_COUNT, SET_MESSAGE, SET_NUMBER, PLAY, SET_DICE, SET_WIN_TYPE, SET_TOTAL, YAMS, BRELAN, PETITE_SUITE, GRANDE_SUITE
, RESET_CURRENT, SET_CURRENT } from '../constants/actions';

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

export const set_total = () => {
    return {
        type: SET_TOTAL
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

export const set_win_type = (payload) => {
    return {
        type: SET_WIN_TYPE, payload
    }
};

export const reset_current = () => {
    return {
        type: RESET_CURRENT
    }
};


export const set_current = (payload) => {
    return {
        type: SET_CURRENT, payload
    }
};

// Actions Gains

export const yams = (payload) => {
    return {
        type: YAMS, payload
    }
}

export const brelan = (payload) => {
    return {
        type: BRELAN, payload
    }
}

export const petite_suite = (payload) => {
    return {
        type: PETITE_SUITE, payload
    }
}

export const grande_suite = (payload) => {
    return {
        type: GRANDE_SUITE, payload
    }
}
