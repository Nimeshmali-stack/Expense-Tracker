import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Forms.css";

export default function EditExpense() {

  let navigate = useNavigate();

  const { id } = useParams();

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

  useEffect(() => {
    loadExpense();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/expense/${id}`, expense);
      navigate("/expenses");
    } catch (error) {
      alert("Error updating expense");
    }
  };

  const loadExpense = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/expense/${id}`);
      setExpense(result.data);
    } catch (error) {
      alert("Error loading expense");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Update Expense</h2>

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

          <button type="submit" className="btn-submit">Update Expense</button>

        </form>
      </div>
    </div>
  );
}