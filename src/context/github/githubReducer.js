import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USER,
    GET_USER,
    GET_REPOS
} from '../type';

export default (state, action) => {
    switch (action.type) {
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case GET_USER:
            return{
                ...state,
                user: action.payload,
                loading: false
            }
        case CLEAR_USER:
            return {
                ...state,
                loading: false,
                users:[]
            };
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
} 