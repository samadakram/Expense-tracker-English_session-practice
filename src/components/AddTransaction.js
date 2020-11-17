import React, { useState } from 'react';

export const AddTransaction = ()=> {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return(
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text" 
                           id="description" 
                           placeholder="Detail of Trnsaction"
                           value={text}
                           onChange={(e)=> setText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number"
                            id="transactionamount"
                            placeholder="Enter Transaction amount"
                            value={amount}
                            onChange={(e)=> setAmount(e.target.value)}
                    />
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}