import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import EditExpenses from "./components/EditExpenses";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // ✅ Store expenses in state
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 2000 },
    { id: 2, description: "Rent", amount: 15000 },
    { id: 3, description: "Transport", amount: 500 },
  ]);

  // ✅ Delete Expense Function
  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // ✅ Add Expense Function
  const handleAdd = (newExpense) => {
    setExpenses([...expenses, { id: Date.now(), ...newExpense }]);
  };

  // ✅ Update Expense Function
  const handleUpdate = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/expenses" element={<ExpenseList expenses={expenses} onDelete={handleDelete} />} />
          <Route path="/add-expense" element={<AddExpense onAdd={handleAdd} />} />
          <Route path="/edit-expense/:id" element={<EditExpenses onUpdate={handleUpdate} expenses={expenses} />} />
        </Route>
        <Route path="*" element={<h2 className="text-center">404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
