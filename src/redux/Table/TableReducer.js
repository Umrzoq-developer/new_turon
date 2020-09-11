import {BEGIN_FETCH, FAIL_FETCH_TABLE, SUCCESS_FETCH} from './TableAction'

const initialState = {
    data: null,
    error: false,
    loading: false,
};



export default (state= initialState, action) => {
    switch (action.type){
        case BEGIN_FETCH:
            return{
                ...state,
                loading: true,
                data: null,
                error: false,
            };
        case SUCCESS_FETCH:

            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            };
        case FAIL_FETCH_TABLE:
            return {
                ...state,
                loading: false,
                data: null,
                error: true
            };
        default:
            return state
    }
}