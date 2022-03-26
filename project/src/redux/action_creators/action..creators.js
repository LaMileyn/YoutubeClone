//LOGIN ACTION CREATORS
export const loginRequestAction = ({type}) => {
    return { type }
}
export const loginSuccessAction = ({type,payload}) => {
    return { type , payload}
}
export const loadProfileAction = ({type,payload}) =>{
    return { type , payload}
}
export const loginFailAction = ({type,payload}) =>{
    return { type, payload}
}
export const logoutAction = ({type}) => {
    return { type}
}
//
//=======================================================
// YOUTUBE VIDEOS ACTION CREATORS
export const homeVideosRequestAction = ({type}) =>{
    return { type }
}
export const homeVideosSuccessAction = ( {type,payload}) =>{
    return { type , payload }
}
export const homeVideosFailAction = ( { type, payload }) =>{
    return { type, payload}
}

// YOUTUBE SELECTED VIDEO ACTION CREATORS

export const selectedVideoRequestAction = ({ type }) =>{
    return { type }
}
export const selectedVideoSuccessAction = ( {type,payload}) =>{
    return { type,payload}
}
export const selectedVideoFailAction = ( {type ,payload}) =>{
    return { type, payload}
}
// YOUTUBE  CHANNEL DETAILS

export const channelDetailsRequestAction = ( { type }) =>{
    return { type }
}
export const channelDetailsSuccessAction = ( { type ,payload }) =>{
    return { type, payload }
}
export const channelDetailsFailAction = ( { type, payload } ) =>{
    return { type, payload }
}
// YOUTUBE SUBSCRIBE CHECK

export const StatusCheckAction  = ( {type,payload}) =>{
    return { type, payload }
}
// YOTUBE COMMENTS
export const commentsRequestAction = ( { type }) =>{
    return { type }
}
export const commentsSuccessAction = ( { type ,payload }) =>{
    return { type, payload }
}
export const commentsFailAction = ( { type, payload } ) =>{
    return { type, payload }
}
export const createCommentSuccessAction = ( { type,payload } ) =>{
    return { type, payload }
}
export const createCommentFailAction = ( { type, payload } ) =>{
    return { type, payload }
}
// YOTUBE RELATED VIDEOS

export const relatedVideosRequestAction = ( { type } ) =>{
    return { type }
}
export const relatedVideosSuccessAction = ( { type, payload } ) =>{
    return { type, payload }
}
export const relatedVideosFailAction = ( { type, payload } ) =>{
    return { type, payload }
}
// YOTUBE SEARCH VIDEOS
export const serchVideosRequestAction = ( { type } ) =>{
    return { type }
}
export const serchVideosSuccessAction = ( { type, payload } ) =>{
    return { type, payload }
}
export const serchVideosFailAction = ( { type, payload } ) =>{
    return { type, payload }
}