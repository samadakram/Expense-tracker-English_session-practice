import React, { createContext, useReducer } from 'react';

const initialState = {
    transactions: [
        {id: 1, descrition: "Income 1", transactionAmount: 1000},
        {id: 2, descrition: "Expense 2", transactionAmount: -100},
        {id: 3, descrition: "Income 2", transactionAmount: 1000},
        {id: 4, descrition: "Expense 1", transactionAmount: -500}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=> {

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactionAmount
        }}>
            {children}
        </GlobalContext.Provider>
    );
}