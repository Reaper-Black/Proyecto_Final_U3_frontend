import React, { createContext, useState } from "react";

const initialState = {
    count: 0
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    const add = () => {
        setState((current) => ({ ...current, count: current.count + 1}));
    };

    return (
        <GlobalContext.Provider value={{ state, add }}>
            {children}
        </GlobalContext.Provider>
    );
};