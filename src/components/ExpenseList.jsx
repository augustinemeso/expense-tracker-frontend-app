import { useNavigate } from "react-router-dom";
import React from "react";

const ExpenseList = ({ expenses }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Expense List</h2>
      <ul className="space-y-2">
        {expenses.map((expense) => (
          <li key={expense.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>{expense.description} - Ksh {expense.amount}</span>
            <button
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
              onClick={() => navigate(`/edit-expense/${expense.id}`, { state: { expense } })}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;


// import { useNavigate } from "react-router-dom";
// import React from 'react';

// const ExpenseList = ({ expenses }) => {
// // const ExpenseList = () => {
//   // const expenses = [
//   //   { id: 1, description: "Groceries", amount: 2000 },
//   //   { id: 2, description: "Rent", amount: 15000 },
//   //   { id: 3, description: "Transport", amount: 500 },
//   // ];

//   const navigate = useNavigate();

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Expense List</h2>
//       <ul className="space-y-2">
//         {expenses.map((expense) => (
//           <li key={expense.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
//             <span>{expense.description} - Ksh {expense.amount}</span>
//             <button
//               className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
//               onClick={() => navigate("/edit-expense/:id", { state: { expense } })}
//               // onClick={() => navigate("/edit-expense/:id", { state: { expense } })}
//             >
//               Edit
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ExpenseList;
