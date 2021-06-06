import { REHYDRATE } from 'redux-persist';
import constants from '../constants';

const initialState = {
	success: true,
    loading: false,
    isLoggedIn : false,
	user: {
		sessionToken: null,
		id: null,
        accountId: null,
        email: null,
        lastName: null,
        firstName: null,
        gender: null,
        birthday: null
	}
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case REHYDRATE:
            if(!action.payload){
                return {
                    ...state,
                }
            }
            return {
                ...state,
                user: action.payload.auth.user,
                success: action.payload.auth.success,
                loading: action.payload.auth.loading,
                isLoggedIn : action.payload.auth.isLoggedIn,
            };
        case constants("auth").reducers.login.loading:
            return {
                ...state,
                loading : true,
                isLoggedIn : false,
            };
        case constants("auth").reducers.login.error:
            return {
                ...state,
                loading : false,
                success: false,
                data:{
                    message: action.payload.message
                },
                isLoggedIn : false,
            };
        case constants("auth").reducers.login.success:
            return {
                ...state,
                loading : false,
                success: true,
                isLoggedIn : true,
                user: action.payload.data,
            };
        case constants("auth").reducers.login.reset:
            return {
                ...state,
                success: true,
                loading: false,
                isLoggedIn : false,
                user: {
                    sessionToken: null,
                    id: null,
                    accountId: null,
                    email: null,
                    lastName: null,
                    firstName: null,
                    gender: null,
                    birthday: null
                }
            };
        default:
            return {...state};
    }
}