import { combineReducers } from "redux";
import postReducer from './postReducer'
import usersReducer from './usesrReducer'

export default combineReducers({
    posts: postReducer,
    users: usersReducer
})