import { SET_NUMBER, PLAY, SET_DICE, SET_WIN_TYPE, SET_TOTAL } from '../constants/actions';

const initialState = {
    number: 0,
    launch: false,
    total: 0,
    dices: {
        dice_1: 1,
        dice_2: 1,
        dice_3: 1,
    },
    win_types: {
        yams: 0,
        brelan: 0,
        petite_suite: 0,
        grande_suite: 0,
    },
    result: {
        win: false,
        win_type: '',
    }
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_NUMBER:
            return {
                ...state,
                number: action.payload
            }
        case SET_TOTAL:
            return {
                ...state,
                total: state.total + 1
            }
        case PLAY:
            return {
                ...state,
                launch: !state.launch,
            }
        case SET_DICE:
            return {
                ...state,
                dices: {
                    dice_1: action.payload_1,
                    dice_2: action.payload_2,
                    dice_3: action.payload_3,
                }
            }
        case SET_WIN_TYPE:

            const type = action.payload;

            if (type === 'yams') {
                return {
                    ...state,
                    win_types: {
                        yams: state.win_types.yams + 1,
                        brelan: state.win_types.brelan,
                        petite_suite: state.win_types.petite_suite,
                        grande_suite: state.win_types.grande_suite,
                    }
                }
            } else if (type === 'brelan') {
                return {
                    ...state,
                    win_types: {
                        yams: state.win_types.yams,
                        brelan: state.win_types.brelan + 1,
                        petite_suite: state.win_types.petite_suite,
                        grande_suite: state.win_types.grande_suite,
                    }
                }
            } else if (type === 'petite_suite') {
                return {
                    ...state,
                    win_types: {
                        yams: state.win_types.yams,
                        brelan: state.win_types.brelan,
                        petite_suite: state.win_types.petite_suite + 1,
                        grande_suite: state.win_types.grande_suite,
                    }
                }
            } else if (type === 'grande_suite') {
                return {
                    ...state,
                    win_types: {
                        yams: state.win_types.yams,
                        brelan: state.win_types.brelan,
                        petite_suite: state.win_types.petite_suite,
                        grande_suite: state.win_types.grande_suite + 1,
                    }
                }
            }

        default:
            return state;
    }
}

export default reducer;