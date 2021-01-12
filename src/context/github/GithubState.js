import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USER,
    GET_USER,
    GET_REPOS
} from '../type';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);
    let clientId;
    let clientSecret;
    if(process.env.NODE_ENV==='production')
    {
        clientId=process.env.REACT_APP_GITHUB_CLIENT_ID;
        clientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    }
    else{
        clientId=process.env.CLIENT_ID;
        clientSecret=process.env.CLIENT_SECRET;
    }

    // Search Users
    const searchUser = async (search) => {
        try{
        setLoading();
        const res = await axios.get(
            `https://api.github.com/search/users?q=${search}&client_id=${clientId}&client_secret=${clientSecret}`
        );
        console.log("Users",res.data.items);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    }
    catch(e){
        console.log(e);  
    }
    };

    // Get User
    const getUser = async (user) => {
        setLoading();
        const res = await axios.get(
          `https://api.github.com/users/${user}?q=client_id=${clientId}&client_secret=${clientSecret}`
        );
        dispatch({
            type: GET_USER,
            payload: res.data
        });

        

    // Get Repos
    const repos = await axios.get(
        `https://api.github.com/users/${user}/repos?q=client_id=${clientId}&client_secret=${clientSecret}`
      );    
      dispatch({
          type: GET_REPOS,
          payload: repos.data
      })  
    };

    // Clear Users
    const clearUser = () => dispatch({ type: CLEAR_USER });

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUser,
            clearUser,
            getUser
        }}
    >{props.children}</GithubContext.Provider>
}
export default GithubState;