import {
    CHANNEL_DETAILS_FAIL,
    CHANNEL_DETAILS_REQUEST,
    CHANNEL_DETAILS_SUCCESS,
    COMMENTS_FAIL,
    COMMENTS_REQUEST,
    COMMENTS_SUCCESS, CREATE_COMMENTS_FAIL, CREATE_COMMENTS_SUCCESS,
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS,
    LOAD_PROFILE,
    LOG_OUT,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, RELATED_VIDEOS_FAIL, RELATED_VIDEOS_REQUEST, RELATED_VIDEOS_SUCCESS,
    SUBSCRIBE_STATUS_CHECK,
    VIDEO_SELECTED_FAIl,
    VIDEO_SELECTED_REQUEST,
    VIDEO_SELECTED_SUCCESS
} from "../action_types/action.type";
import firebase from "firebase/compat/app";
import auth from "@firebase_auth/firebase"
import {
    channelDetailsFailAction,
    channelDetailsRequestAction,
    channelDetailsSuccessAction,
    commentsFailAction,
    commentsRequestAction,
    commentsSuccessAction, createCommentFailAction,
    createCommentSuccessAction,
    homeVideosFailAction,
    homeVideosRequestAction,
    homeVideosSuccessAction,
    loadProfileAction,
    loginFailAction,
    loginRequestAction,
    loginSuccessAction,
    logoutAction, relatedVideosFailAction, relatedVideosRequestAction, relatedVideosSuccessAction,
    selectedVideoFailAction,
    selectedVideoRequestAction,
    selectedVideoSuccessAction,
    StatusCheckAction
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
//YOUTUBE SELECTED VIDEO
export const getSelectedVideoById = id => async dispatch =>{
    try{
        dispatch(selectedVideoRequestAction({
            type : VIDEO_SELECTED_REQUEST
        }))
        const { data }  = await request('/videos',{
            params : {
                part : 'snippet,statistics',
                id
            }
        })
        dispatch(selectedVideoSuccessAction({
            type: VIDEO_SELECTED_SUCCESS,
            payload : data.items[0]
        }))
    }catch(error){
        dispatch(selectedVideoFailAction({
            type : VIDEO_SELECTED_FAIl,
            payload : error.message
        }))
    }
}

export const getChannelDetails = id => async dispatch =>{
    try{
        dispatch(channelDetailsRequestAction({
            type : CHANNEL_DETAILS_REQUEST
        }))
        const { data }  = await request('/channels',{
            params : {
                part : 'snippet,statistics,contentDetails',
                id
            }
        })
        dispatch(channelDetailsSuccessAction({
            type: CHANNEL_DETAILS_SUCCESS,
            payload : data.items[0]
        }))
    }catch(error){
        dispatch(channelDetailsFailAction({
            type : CHANNEL_DETAILS_FAIL,
            payload : error.message
        }))
    }
}

export const getSubsribeStatus = id => async (dispatch,getState) =>{
    try{
        const { data }  = await request('/subscriptions',{
            params : {
                part : 'snippet',
                forChannelId : id,
                mine : true
            },
            headers : {
                Authorization : `Bearer ${getState().authReducer.accessToken}`
            }
        })
        dispatch(StatusCheckAction({
            type : SUBSCRIBE_STATUS_CHECK,
            payload : data.items.length !== 0
        }))
    }catch(error){
        console.log(error.message)
    }
}

export const getComments = videoId => async dispatch =>{
    try{
        dispatch(commentsRequestAction({
            type : COMMENTS_REQUEST
        }))
        const { data }  = await request('/commentThreads',{
            params : {
                part : 'snippet',
                videoId : videoId
            }
        })
        dispatch(commentsSuccessAction({
            type : COMMENTS_SUCCESS,
            payload : data.items
        }))
    }catch(error){
        console.log(error.message)
        dispatch(commentsFailAction({
            type : COMMENTS_FAIL,
            payload : error.message
        }))
    }
}

export const createComments = (videoId,text) => async ( dispatch, getState ) =>{
    try{
        const postData = {
            snippet : {
                videoId : videoId,
                topLevelComment: {
                    snippet : {
                        textOriginal : text
                    }
                }
            }
        }
        await request.post('/commentThreads',postData,{
            params : {
                part : 'snippet',
            },
            headers : {
                Authorization : `Bearer ${getState().authReducer.accessToken}`
            }
        })
        dispatch(createCommentSuccessAction({
            type : CREATE_COMMENTS_SUCCESS,
            payload : text
        }))
        setTimeout( () => dispatch(getComments(videoId)),3000)
    }catch(error){
        console.log(error.message)
        dispatch(createCommentFailAction({
            type : CREATE_COMMENTS_FAIL,
            payload : error.message
        }))
    }
}

// YOTUBE RELATED VIDEOS
export const getRelatedVideos = id => async dispatch =>{
    try {
    dispatch(relatedVideosRequestAction({ type : RELATED_VIDEOS_REQUEST }) )
    const { data } = await request('/search', {
        params : {
            part : "snippet",
            relatedToVideoId : id,
            maxResults : 15,
            type : "video"
        }
    })
    dispatch(relatedVideosSuccessAction({ type : RELATED_VIDEOS_SUCCESS , payload : data.items }) )
    } catch (e) {
        dispatch(relatedVideosFailAction({type : RELATED_VIDEOS_FAIL, payload : e.message }))
    }

}