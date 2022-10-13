import {SET_NUMBER, PLAY} from '../constants/actions';

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

        default:
            return state;
    }
}

export default reducer;