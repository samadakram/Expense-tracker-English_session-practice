import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (<li className="plus">
                    {transaction.text}
                <span> ${transaction.amount} </span>
                    <button className="delete-btn">X</button>
                </li>))}
            </ul>
        </div>
    );
}