import {SET_NUMBER, PLAY, SET_DICE} from '../constants/actions';

const initialState = {
    number: 0,
    launch: false,
    dices : {
        dice_1 : 1,
        dice_2 : 1,
        dice_3 : 1,
    },
    win_types : {
        yams :'YAMS',
        brelan : 'BRELAN',
        petite_suite : 'PETITE SUITE',
        grande_suite : 'GRANDE SUITE',
    },
    result : {
        win : false,
        win_type : '',
    }
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_NUMBER:
            return {
                ...state,
                number: action.payload
            }
        case PLAY:
            return {
                ...state,
                launch: !state.launch,
            }
        case SET_DICE:
            return {
                ...state,
                dices : {
                    dice_1 : action.payload_1,
                    dice_2 : action.payload_2,
                    dice_3 : action.payload_3,
                }
            }

        default:
            return state;
    }
}

export default reducer;