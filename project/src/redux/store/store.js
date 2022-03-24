import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authReducer} from "@redux/reducers/authReducer";
import {homeVideosReducer} from "@redux/reducers/homeVideosReducer";
import {SelectedVideoReducer} from "@redux/reducers/selectedVideoReducer";
import {channelDetailsReducer} from "@redux/reducers/channelDetailsReducer";
import {CommentsReducer} from "@redux/reducers/CommentsReducer";
import {relatedVideosReducer} from "@redux/reducers/relatedVideosReducer";


const reducers = combineReducers({
    authReducer,
    homeVideosReducer,
    selectedVideo : SelectedVideoReducer,
    channelDetails : channelDetailsReducer,
    Comments: CommentsReducer,
    relatedVideos : relatedVideosReducer
})

const store = createStore(reducers,{},composeWithDevTools(applyMiddleware(thunk)))

export default store;