import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS,
    LOAD_PROFILE,
    LOG_OUT,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS
} from "../action_types/action.type";
import firebase from "firebase/compat/app";
// import auth from "@firebase_auth/firebase.js"
import auth from "@firebase_auth/firebase"
import {
    homeVideosFailAction,
    homeVideosRequestAction, homeVideosSuccessAction,
    loadProfileAction,
    loginFailAction,
    loginRequestAction,
    loginSuccessAction, logoutAction
} from "../action_creators/action..creators";
import {request} from "../../api/axios.instance";

//LOGIN
export const login = () => async dispatch => {
    try {
        dispatch(loginRequestAction({
            type : LOGIN_REQUEST
        }))
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
        const res = await auth.signInWithPopup(provider)
        const accessToken = res.credential.accessToken
        const profile = {
            name : res.additionalUserInfo.profile.displayName,
            photoURL : res.additionalUserInfo.profile.picture
        }
        dispatch(loginSuccessAction({
            type : LOGIN_SUCCESS,
            payload : accessToken
        }))
        // DATA TO SESSION STORAGE
        sessionStorage.setItem('ytc-access-token',accessToken)
        sessionStorage.setItem('ytc-profile',JSON.stringify(profile))
        // /
        dispatch(loadProfileAction({
            type : LOAD_PROFILE,
            payload : profile
        }))

    }catch (e){
        dispatch(loginFailAction({
            type : LOGIN_FAIL,
            payload : e.message
        }))
    }
}
export const logout = () => async dispatch =>{
    auth.signOut()
    dispatch(logoutAction({
        type : LOG_OUT
    }))
    sessionStorage.removeItem('ytc-access-token')
    sessionStorage.removeItem('ytc-profile')
}
//
// YOUTUBE ALL VIDEOS
export const  getPopularVideos = () => async (dispatch,getState) =>{
    try{
        dispatch(homeVideosRequestAction({
            type : HOME_VIDEOS_REQUEST
        }))
        const res = await request("/videos",{
            params : {
                part : "snippet,contentDetails,statistics",
                chart : "mostPopular",
                regionCode : "US",
                maxResults : 20,
                pageToken : getState().homeVideosReducer.nextPageToken
            }
        })
        // console.log(res)
        dispatch(homeVideosSuccessAction({
            type : HOME_VIDEOS_SUCCESS,
            payload : {
                videos : res.data.items,
                nextPageToken : res.data.nextPageToken,
                category : "All",
                totalCount : res.data.pageInfo.totalResults
            }
        }))
    }catch (e){
        dispatch(homeVideosFailAction({
            type : HOME_VIDEOS_FAIL,
            payload : e.message
        }))
    }
}
//YOUTUBE CATEGORY VIDEO

export const getPopularVideosByCategory = (keyword) => async (dispatch,getState) =>{
    try{
        dispatch(homeVideosRequestAction({
            type : HOME_VIDEOS_REQUEST
        }))
        const res = await request("/search",{
            params : {
                part : "snippet",
                maxResults : 20,
                pageToken :  getState().homeVideosReducer.pageToken,
                q : keyword,
                type : "video"
            }
        })
        console.log(res)
        dispatch(homeVideosSuccessAction({
            type : HOME_VIDEOS_SUCCESS,
            payload : {
                videos : res.data.items,
                nextPageToken : res.data.nextPageToken,
                category : keyword,
                totalCount : res.data.pageInfo.totalResults
            }
        }))
    }catch (e){
        dispatch(homeVideosFailAction({
            type : HOME_VIDEOS_FAIL,
            payload : e.message
        }))
    }
}