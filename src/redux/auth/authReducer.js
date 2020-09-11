import {BEGIN_AUTH, SUCCESS_AUTH, FAIL_AUTH, AUTH_LOGOUT} from "./authAction";


const initialState = {
    loading: false,
    error: false,
    loggedIn: false
};


export default (state=initialState, action) => {

    switch (action.type) {
        case BEGIN_AUTH:
            return{
                ...state,
                loading: true,
                error: false,
                loggedIn: false
            };
        case SUCCESS_AUTH:
            return {
                ...state,
                loading: false,
                error: false,
                loggedIn: !state.loggedIn
            };
        case FAIL_AUTH:
            return {
                ...state,
                loading: false,
                error: true,
                loggedIn: false
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                loggedIn: !state.loggedIn,
                loading: false
            };
        default:
            return state
    }

}
