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