import { SET_LOADING, USERS_LOADED, USER_REPOS_LOADED, CLEAR_USERS } from "../../constants/actionTypes";


const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
}

const gitHubUserReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_LOADING: 
            return {
                ...state, 
                loading: true //the spinner begins to spin...here 
            }
        case USERS_LOADED: 
            return {
                ...state,  //this retains the last state... 
                users: action.payload,
                loading: false
            }
        case USER_REPOS_LOADED:
            return {
                ...state, 
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false,
            }
        case CLEAR_USERS: 
            return {
                ...state,
                users: []
            }
            
        default: 
            return state
    }
}


export default gitHubUserReducer



// case USER_LOADED: 
//     return{
//         ...state, 
//         user: action.payload,
//         loading: false,
//     }
// 
// case REPOS_LOADED: 
//             return {
//                 ...state, 
//                 repos: action.payload,
//                 loading: false,
//             }