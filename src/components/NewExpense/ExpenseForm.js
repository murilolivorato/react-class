import React, { useState } from 'react';
const ExpenseForm = () => {
    /*const [enterTitle, setEnterTitle] = useState();
    const [enterAmount, setEnterAmount] = useState();
    const [enterDate, setEnterDate] = useState();*/
    const [userInput, setUserInput] = useState({
        enterTitle: '',
        enterAmount: '',
        enterDate: ''
    })

    const titleChangeHandler = (event) => {
        // setEnterTitle(event.target.value)
        /*setUserInput({
            ...userInput,
            enterTitle: event.target.value
        })*/
        setUserInput ((prevState) =>
            { return { ...prevState, enterTitle: event.target.value  }
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput ((prevState) =>
        { return { ...prevState, enterAmount: event.target.value  }
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput ((prevState) =>
        { return { ...prevState, enterDate: event.target.value  }
        })
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expensiveData = {
            title: userInput.enterTitle,
            amount: userInput.enterAmount,
            date: new Date (userInput.enterDate)
        }
        console.log(expensiveData)
        setUserInput({ enterTitle: '', enterAmount: '', enterDate: '' })
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.enterTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={userInput.enterAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-02" max="2022-01-02" value={userInput.enterDate} onChange={dateChangeHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="subimit"  >Add Expenses</button>
            </div>
        </div>
    </form>
};
export default ExpenseForm;