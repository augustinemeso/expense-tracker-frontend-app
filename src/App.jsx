import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import EditExpenses from "./components/EditExpenses";
import ProtectedRoute from "./components/ProtectedRoute";

const expenses = [
  { id: 1, description: "Groceries", amount: 2000 },
  { id: 2, description: "Rent", amount: 15000 },
  { id: 3, description: "Transport", amount: 500 },
];

const handleUpdate = (updatedExpense) => {
  console.log("Updated Expense:", updatedExpense);
};

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Redirect "/" to "/login" if not authenticated */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* ✅ Login and Register Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/expenses" element={<ExpenseList expenses={expenses} />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/edit-expense/:id" element={<EditExpenses onUpdate={handleUpdate} />} />
        </Route>

        {/* ✅ Catch-all for unknown routes */}
        <Route path="*" element={<h2 className="text-center">404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
