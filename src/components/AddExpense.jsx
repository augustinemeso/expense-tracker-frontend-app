import React, { useState } from "react";
import styles from "./styles/AddExpense.module.css"; // Import CSS Module

const AddExpense = ({ onAdd }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return;

    const newExpense = { id: Date.now(), amount, description };
    onAdd(newExpense);
    setAmount("");
    setDescription("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Add Expense</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            className={styles.inputField}
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" className={`${styles.button} ${styles.buttonPrimary}`}>
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
