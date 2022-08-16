import './ExpenseItem.css';
import './Card';
import React, { useState } from 'react';

function ExpenseItem(data) {
    /*const expensiveDate = new Date().toISOString().slice(0, 10);
    const expensiveTitle = 'Car Insurance';
    const expensiveAmount = 294.67;*/
    const [title, setTitle ] = useState(data.title);
    const clickHandler = () => {
        setTitle('Updated');
        console.log(title)
    }
    return (
        <div className="expense-item">
            <div>{title}</div>
            <div className="expense-item__description">
                <h2>{data.date}</h2>
                <div className="expense-item__price">$ {data.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}
export default ExpenseItem;