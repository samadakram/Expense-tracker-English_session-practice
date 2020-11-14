import React, { useState } from 'react';

export const AddTransaction = ()=> {

    let [description, setDescription] = useState();
    let [transactionAmount, setTransactionAmount] = useState();

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
                           value={description}
                           onChange={(e)=> setDescription(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number"
                            id="transactionamount"
                            placeholder="Enter Transaction amount"
                            value={transactionAmount}
                            onChange={(e)=> setTransactionAmount(e.target.value)}
                    />
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}