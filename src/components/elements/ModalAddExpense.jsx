import React, { useState } from "react";

function ModalAddExpense({ onSubmit }) {
  const [form, setForm] = useState({
    category: "",
    item: "",
    amount: "",
  });

  const handleSubmit = () => {
    onSubmit(form);
    setForm({ category: "", item: "", amount: "" });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-80">
        <h3 className="font-semibold mb-4">Add Expense</h3>

        <input
          className="border w-full mb-2 p-2"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          className="border w-full mb-2 p-2"
          placeholder="Item"
          value={form.item}
          onChange={(e) =>
            setForm({ ...form, item: e.target.value })
          }
        />

        <input
          className="border w-full mb-4 p-2"
          placeholder="Amount"
          type="number"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default ModalAddExpense;
