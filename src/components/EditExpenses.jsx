import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import React from "react";

const EditExpenses = ({ onUpdate }) => {
  const { id } = useParams(); // Get expense ID from URL
  const location = useLocation(); // Get state from navigation
  const expense = location.state?.expense; // Extract expense data

  // Ensure default values to avoid "undefined" errors
  const [amount, setAmount] = useState(expense?.amount || "");
  const [description, setDescription] = useState(expense?.description || "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...expense, amount, description });
    navigate("/expenses"); // Redirect back to expenses list after updating
  };

  if (!expense) {
    return <p className="text-red-500 text-center mt-10">Expense not found.</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Edit Expense</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Amount</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600">Description</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Update Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditExpenses;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const EditExpenses = ({ expense, onUpdate }) => {
//   const [amount, setAmount] = useState(expense.amount);
//   const [description, setDescription] = useState(expense.description);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate({ ...expense, amount, description });
//     navigate("/home"); // Redirect back to Home after updating
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Edit Expense</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-600">Amount</label>
//             <input
//               type="number"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter amount"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-600">Description</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
//           >
//             Update Expense
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditExpenses;
