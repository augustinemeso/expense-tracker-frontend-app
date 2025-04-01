import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditExpenses = ({ onUpdate, expenses }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const expense = expenses.find((exp) => exp.id === Number(id));

  useEffect(() => {
    if (!expense) {
      navigate("/expenses"); 
    }
  }, [expense, navigate]);

  const [amount, setAmount] = useState(expense?.amount || "");
  const [description, setDescription] = useState(expense?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description || !expense) return; 

    onUpdate({ id: expense.id, amount: Number(amount), description });

    navigate("/expenses"); 
  };

  if (!expense) {
    return <h2 className="text-center text-red-500">Expense Not Found</h2>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Edit Expense</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            step="100"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditExpenses;
