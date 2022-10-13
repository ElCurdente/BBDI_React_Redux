
import { YAMS, BRELAN, PETITE_SUITE, GRANDE_SUITE } from "../constants/actions"

const initialState = {
    total : 0,
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case YAMS:
            return {
                ...state,
                total: state.total + (5 * action.payload)
            }
        case BRELAN:
            return {
                ...state,
                total: state.total + (3 * action.payload)
            }
        case PETITE_SUITE:
            return {
                ...state,
                total: state.total + (1 * action.payload)
            }
        case GRANDE_SUITE:
            return {
                ...state,
                total: state.total + (2 * action.payload)
            }

        default:
            return state;

    }
}

export default reducer;