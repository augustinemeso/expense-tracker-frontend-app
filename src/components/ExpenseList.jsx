import React from "react";
import { useNavigate } from "react-router-dom";

const ExpenseList = ({ expenses, onDelete }) => {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Assuming authentication uses localStorage
    navigate("/"); // Redirect to login
  };

  return (
    <div className="p-8 relative min-h-screen">
      {/* Header with Logout Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Expense List</h2>
        <button
          onClick={handleLogout}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Expense List */}
      <ul className="space-y-4">
        {expenses.map((expense) => (
          <li key={expense.id} className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
            <span>{expense.description}: Ksh {expense.amount}</span>
            <div>
              <button
                onClick={() => navigate(`/edit-expense/${expense.id}`, { state: { expense } })}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-blue-700 transition"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(expense.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add Expense Button (Bottom Left) */}
      <button
        onClick={() => navigate("/add-expense")}
        className="fixed bottom-4 left-4 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        + Add Expense
      </button>
    </div>
  );
};

export default ExpenseList;
