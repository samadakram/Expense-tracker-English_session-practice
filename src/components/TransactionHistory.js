import React from 'react';

export const TransactionHistory = ()=> {
    return(
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Project 1 income
                    <span>$1,000</span>
                </li>
                <li className="minus">
                    Project 1 Salaries
                    <span>$-500</span>
                </li>
            </ul>
        </div>
    );
}