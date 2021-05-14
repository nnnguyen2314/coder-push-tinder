import React from 'react';
import {initialState, tinderReducer} from '../../store/reducer';

export const TinderContext = React.createContext({
    state: initialState,
    dispatch: () => null
});

export const TinderProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(tinderReducer, initialState);

    return (
        <TinderContext.Provider value={[ state, dispatch ]}>
            { children }
        </TinderContext.Provider>
    )
};
