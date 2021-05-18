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
            const currentSuggestions = payload.list ? payload.list.filter((d) => {
                return !state.likedHistoryList.find(l => l.id === d.id);
            }) : [];
            return {
                ...state,
                suggestions: currentSuggestions,
                suggestion: {
                    list: [...state.suggestion.list, ...currentSuggestions],
                    currentLimit: payload.currentLimit || 20,
                    currentPage: state.suggestion.currentPage + 1,
                },
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
                suggestion: {
                    ...state.suggestion,
                    list: state.suggestion.list.slice(1)
                },
                likedHistoryList: [...state.likedHistoryList, payload]
            };
        case DO_UNLIKE:
            return {
                ...state,
                suggestion: {
                    ...state.suggestion,
                    list: state.suggestion.list.slice(1)
                },
                recentUnliked: payload,
            };
        case DO_RESTORE_LAST_UNLIKED:
            return {
                ...state,
                suggestions: [...state.suggestions, state.recentUnliked],
                suggestion: {
                    list: [...state.suggestions, state.recentUnliked]
                },
                recentUnliked: null,
            };
        default:
            return state;
    }
};

export default tinderReducer;
