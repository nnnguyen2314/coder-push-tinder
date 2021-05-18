import React, {useEffect, useReducer, createContext} from 'react';
import {tinderReducer} from '../../store/reducer';

export const initialState = {
    suggestions: [],
    likedHistoryList: localStorage.getItem('likedHistoryList') ? JSON.parse(localStorage.getItem('likedHistoryList')) : [],
    recentUnliked: null,
};

export const TinderContext = createContext({
    state: initialState,
    dispatch: () => null
});

export const TinderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tinderReducer, initialState);

    useEffect(() => {
        localStorage.setItem("likedHistoryList", JSON.stringify(state.likedHistoryList));
    }, [state.likedHistoryList]);

    return (
        <TinderContext.Provider value={[ state, dispatch ]}>
            { children }
        </TinderContext.Provider>
    )
};
