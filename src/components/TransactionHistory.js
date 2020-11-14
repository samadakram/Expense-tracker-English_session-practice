import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionHistory = ()=> {

    const { transactions } = useContext(GlobalContext);

    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="minus">
                    Project 1 Salaries
                    <span>$-500</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    );
}