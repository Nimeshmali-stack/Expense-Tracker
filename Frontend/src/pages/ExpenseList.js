import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/ExpenseList.css";

export default function ExpenseList() {

  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const result = await axios.get("http://localhost:8080/expenses");
      setExpenses(result.data);
    } catch (error) {
      alert("Error loading expenses");
    }
  };

  const deleteExpense = async (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      try {
        await axios.delete(`http://localhost:8080/expense/${id}`);
        loadExpenses();
      } catch (error) {
        alert("Error deleting expense");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

 return (
  <div className="expense-container">

    <div className="expense-box">

      <h2 className="expense-title">Expense List</h2>

      <button 
        className="btn-add"
        onClick={() => navigate("/addexpense")}
      >
        + Add Expense
      </button>

      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        expenses.map((expense) => (

          <div key={expense.id} className="expense-item">

            <div className="expense-name">
              {expense.expenseName}
            </div>

            <div className="expense-detail">
              Amount: ₹ {expense.amount}
            </div>

            <div className="expense-detail">
              Date: {new Date(expense.date).toLocaleDateString()}
            </div>

            {expense.description && (
              <div className="expense-detail">
                Description: {expense.description}
              </div>
            )}

            <div className="expense-actions">
              <button 
                className="btn-edit"
                onClick={() => navigate(`/editexpense/${expense.id}`)}
              >
                Edit
              </button>

              <button 
                className="btn-delete"
                onClick={() => deleteExpense(expense.id)}
              >
                Delete
              </button>
            </div>

          </div>

        ))
      )}

    </div>

  </div>
);
}