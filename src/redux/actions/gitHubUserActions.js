import axios from "axios";
import {
    USERS_LOADED,
    SET_LOADING,
    USER_LOADED,
    REPOS_LOADED,
    USER_REPOS_LOADED,
} from "../../constants/actionTypes";

//const GITHUB_URL = "https://api.github.com";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const github = axios.create({
    baseURL: GITHUB_URL,
});

//the usage of thunk middleware allows the usage of dispatch and this kind of function to be invoked
export const getSearchedUsers = (text) => async (dispatch) => {
    dispatch({ type: SET_LOADING }); //keeps the spinining..
    const params = new URLSearchParams({
        q: text,
    });
    try {
        // console.log(text);
        const response = await github.get(`/search/users?${params}`);
        //console.log(response)
        dispatch({ type: USERS_LOADED, payload: response.data.items });
    } catch (error) {
        console.log(error.message);
    }
};

export const getUser = (username) => async (dispatch) => {
    //console.log("am reaching here")
    dispatch({ type: SET_LOADING }); //starts the spinner
    try {
        const response = await github.get(`/users/${username}`);
        console.log(response);
        dispatch({ type: USER_LOADED, payload: response.data });
    } catch (error) {
        //but will handle error display later...
        console.log(error.message);
    }
};

export const getUserRepos = (username) => async (dispatch) => {
    //there is no need to set loading here again ..
    try {
        const repoResponse = await github.get(`/users/${username}/repos`);
        console.log(repoResponse);
        dispatch({ type: REPOS_LOADED, payload: repoResponse.data });
    } catch (error) {
        console.log(error.message);
    }
};

//combining the two functions into one
export const getUserData = (username) => async (dispatch) => {
    dispatch(getUser(username));
    dispatch(getUserRepos(username));
};

//combining the two functions into one in one requests....go
export const getUserDatas = (username) => async (dispatch) => {

    // this starts the spinner
    dispatch({ type: SET_LOADING }); 
    try {
        //we can destructured into any response-name we like ..since the Promise.all is returning multipe data objects
        const [user, repos] = await Promise.all([
            github.get(`/users/${username}`),
            github.get(`/users/${username}/repos`),
        ]);
        dispatch({
            type: USER_REPOS_LOADED,
            payload: { user: user.data, repos: repos.data },
        });
        // dispatch({type: USER_LOADED, payload: user.data})
        // dispatch({ type: REPOS_LOADED, payload: repos.data });
    } catch (error) {
        //handle errors here..
        console.log(error);
    }
};
