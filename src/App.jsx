import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import EditExpenses from "./components/EditExpenses";
import ProtectedRoute from './components/ProtectedRoute';

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
      {/* <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/expenses" element={<ExpenseList expenses={expenses} />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/edit-expense/:id" element={<EditExpenses onUpdate={handleUpdate} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import ExpenseList from "./components/ExpenseList";
// import AddExpense from "./components/AddExpense";
// import EditExpenses from "./components/EditExpenses";

// const expenses = [
//   { id: 1, description: "Groceries", amount: 2000 },
//   { id: 2, description: "Rent", amount: 15000 },
//   { id: 3, description: "Transport", amount: 500 },
// ];

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/" element={<Login />} /> */}
//         {/* <Route path="/home" element={<Home />} /> */}
//         <Route path="/expenses" element={<ExpenseList expenses={expenses}/>} />
//         <Route path="/" element={<AddExpense />} />
//         <Route path="/edit-expense/:id" element={<EditExpenses />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
