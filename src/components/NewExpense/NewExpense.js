import React from 'react';
import './NewExpense.css'
import ExpenseForm from  './ExpenseForm.js'

function NewExpense(data) {
    return <div className="new-expense">
        <ExpenseForm />
    </div>
}
export default NewExpense;