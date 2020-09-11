import axios from 'axios';
import {mainApi} from '../../apis/mainApi';

export const BEGIN_FETCH = 'BEGIN_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const FAIL_FETCH_TABLE = 'FAIL_FETCH_TABLE';


axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common.accept = 'application/json';

export const fetchTable = (page=1) => async dispatch => {

    const token = localStorage.getItem('token');

    var config = {
        method: 'get',
        url: `${mainApi}/orders?page=${page}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

            dispatch({type: BEGIN_FETCH});
    try {
        const response = await axios(config);

        dispatch({type: SUCCESS_FETCH, payload: response.data})

    } catch (e) {
        dispatch({type: FAIL_FETCH_TABLE})
    }
};
