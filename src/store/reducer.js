import {
    FETCH_SUGGESTIONS_INIT,
    FETCH_SUGGESTIONS_SUCCESS,
    FETCH_SUGGESTIONS_FAILURE,
    DO_LIKE,
    DO_UNLIKE,
    DO_RESTORE_LAST_UNLIKED,
    FETCH_LIKED_HISTORY,
} from './actions';

export const tinderReducer = (state, {type, payload}) => {

    switch (type) {
        case FETCH_SUGGESTIONS_INIT:
            return state;
        case FETCH_SUGGESTIONS_SUCCESS:
            return {
                ...state,
                suggestions: payload,
            };
        case FETCH_SUGGESTIONS_FAILURE:
            return state;
        case FETCH_LIKED_HISTORY:
            let storedLikedHistoryList = localStorage.getItem('likedHistoryList');
            return {
                ...state,
                likedHistoryList: storedLikedHistoryList ? JSON.parse(storedLikedHistoryList) : []
            };
        case DO_LIKE:
            return {
                ...state,
                likedHistoryList: [...state.likedHistoryList, payload]
            };
        case DO_UNLIKE:
            return {
                ...state,
                recentUnliked: payload,
            };
        case DO_RESTORE_LAST_UNLIKED:
            return {
                ...state,
                suggestions: [...state.suggestions, state.recentUnliked],
                recentUnliked: null,
            };
        default:
            return state;
    }
};

export default tinderReducer;
