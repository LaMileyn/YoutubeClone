import {LOAD_PROFILE, LOG_OUT, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS} from "../action_types/action.type";

const initialState = {
    user: sessionStorage.getItem('ytc-profile')? JSON.parse(sessionStorage.getItem('ytc-profile')) : null,
    loading: false,
    accessToken: sessionStorage.getItem('ytc-access-token')? sessionStorage.getItem('ytc-access-token') : null
}

export const authReducer = (state = initialState, action) =>{
    const { type, payload } = action
    switch (type){
        case LOGIN_REQUEST:
            return { ...state, loading: !state.loading}
        case LOGIN_SUCCESS:
            return { ...state, loading: !state.loading, accessToken: payload}
        case LOGIN_FAIL:
            return { ...state, loading: !state.loading, accessToken: null, error : payload}
        case LOAD_PROFILE:
            return { ...state, user : payload}
        case LOG_OUT:
            return { ...state, user : null, accessToken: null }
        default:
            return state
    }
}