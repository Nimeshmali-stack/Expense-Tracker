import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Forms.css";

export default function AddExpense() {

  const navigate = useNavigate();

  const [expense, setExpense] = useState({
    expenseName: "",
    amount: "",
    date: "",
    description: ""
  });

  const { expenseName, amount, date, description } = expense;

  const onInputChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/expense", expense);
      alert("Expense Added");
      navigate("/expenses");
    } catch (error) {
      alert("Error adding expense");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Add New Expense</h2>

        <form onSubmit={(e) => onSubmit(e)}>

          <div className="form-group">
            <label>Expense Name</label>
            <input
              type="text"
              name="expenseName"
              placeholder="Enter expense name"
              value={expenseName}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button type="submit" className="btn-submit">Add Expense</button>

        </form>

      </div>
    </div>
  );
}