import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authReducer} from "@redux/reducers/authReducer";
import {homeVideosReducer} from "@redux/reducers/homeVideosReducer";
import {SelectedVideoReducer} from "@redux/reducers/selectedVideoReducer";
import {channelDetailsReducer} from "@redux/reducers/channelDetailsReducer";


const reducers = combineReducers({
    authReducer,
    homeVideosReducer,
    selectedVideo : SelectedVideoReducer,
    channelDetails : channelDetailsReducer
})

const store = createStore(reducers,{},composeWithDevTools(applyMiddleware(thunk)))

export default store;