import { useState } from "react"
import './App.css';

    function App () {
      const [expenseName , setName] = useState('')
      const [expenseCategory , setCategory] = useState('')
      const [expeneseAmount , setAmount] = useState('')

      const [expenses, setExpenses] = useState([])

      const handleAllExpense = () => {
        const allExpense = {
          description: expenseName,
          category: expenseCategory,
          amount: expeneseAmount
     
        }
        setExpenses ([...expenses, allExpense])

        setName( '')
        setAmount( '')
        setCategory( '')
      }

      const total = expenses.reduce((accumulator, item) => { 
        return accumulator +  Number(item.amount) 
      }, 0)

      const handleDelete = (indexToDelete) => {
        const updatedExpenses = expenses.filter((item, index) => index !== indexToDelete)
        setExpenses(updatedExpenses)
      }

      return( 
      <div className="card">
        <div className="title-box">
        <h1>Expense Tracker</h1>
        </div>

        <div className="form">
          <label>Description</label>
        <input type 
        ="text"
        placeholder="e.g. groceries"
        value={expenseName}
        onChange={(e) => setName(e.target.value)}
      />

        <label>Category</label>
        <input type 
        ="text"
        placeholder="e.g. food"
        value={expenseCategory}
        onChange={(e) => setCategory(e.target.value)}
      />

        <label>Amount</label>
        <input type 
        ="text"
        placeholder="e.g. 2000 "
        value={expeneseAmount}
        onChange={(e) => setAmount(e.target.value)}
      />

       <button onClick={handleAllExpense}>Add Expense</button>
       </div>

       <ul className="expense-list">
        {expenses.map((item, index) => (
          <li key = {index} className="expense-item">
            {item.description} - {item.category} - {item.amount}
            <button className="delete-btn" onClick={() => handleDelete(index)} >Delete</button>
          </li>
        ))}
       </ul>

       <h2>Total: ₦{total.toLocaleString()}</h2>
      </div>
      )
    }

export default App