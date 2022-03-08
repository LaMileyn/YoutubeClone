import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authReducer} from "@redux/reducers/auth";
import {homeVideosReducer} from "@redux/reducers/homeVideos";


const reducers = combineReducers({
    authReducer,
    homeVideosReducer
})

const store = createStore(reducers,{},composeWithDevTools(applyMiddleware(thunk)))

export default store;