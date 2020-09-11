import {ACTION_HIDE, ACTION_OPEN, ADD_CHOSEN, REMOVE_CHOSEN, ON_SELECT_CHANGE} from "./actionBarAction";
import {AUTH_LOGOUT} from "../auth/authAction";

const initialState = {
    open: false,
    chosen: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ON_SELECT_CHANGE:
            return {
                ...state,
                chosen: action.payload
            };
        case ACTION_OPEN:
            return {
                ...state,
                open: true,
            };
        case ACTION_HIDE:
            return {
                ...state,
                open: false
            };
        case ADD_CHOSEN:
            return {
                ...state,
                chosen: action.payload
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                open: false
            };
        case REMOVE_CHOSEN:
            return {
                ...state,
                chosen: state.chosen.filter(item => item.key !== action.payload),
            };
        default:
            return state
    }
}
