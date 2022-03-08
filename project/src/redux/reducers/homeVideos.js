import {HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS} from "../action_types/action.type";

const initialState = {
    videos : [],
    loading : false,
    nextPageToken : null,
    activeCategory : "All",
    totalCount  : null
}
export const homeVideosReducer = (state = initialState, action) =>{
    const { type, payload } = action;
    switch (type){
        case HOME_VIDEOS_REQUEST:
            return { ...state, loading: true }
        case HOME_VIDEOS_SUCCESS:
            return { ...state,
                videos:
                    payload.category == state.activeCategory
                        ?   [...state.videos,...payload.videos]
                        :   payload.videos,
                nextPageToken: payload.nextPageToken,
                loading: false,
                activeCategory: payload.category,
                totalCount:  payload.totalCount
            }
        case HOME_VIDEOS_FAIL:
            return { ...state,loading: false, error : payload }
        default: return state;
    }
}