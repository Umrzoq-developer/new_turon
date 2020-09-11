import axios from 'axios';
import {mainApi} from "../../apis/mainApi";

export const BEGIN_AUTH = 'BEGIN_AUTH';
export const SUCCESS_AUTH = 'SUCCESS_AUTH';
export const FAIL_AUTH = 'FAIL_AUTH';

export const AUTH_LOGOUT = 'AUTH_LOGOUT';


export const authLogin = (username, password) => async dispatch => {

    dispatch({type: BEGIN_AUTH});
    try {


        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);


        const response = await axios.post(`${mainApi}/auth/login`, formData, {
            headers: {'Content-Type': 'multipart/form-data' }
        });

        if(response.data.hasOwnProperty('token') &&  response.data.token){
            localStorage.setItem('token', response.data.token);
        } else {
            console.log(response.data, "username d");
        }


        dispatch({type: SUCCESS_AUTH});
    } catch (e) {


        dispatch({type: FAIL_AUTH, payload: e.message})
    }

};

export const authLogout = () => {
    return {
        type: AUTH_LOGOUT
    }
};
