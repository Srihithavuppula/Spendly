import { useState } from "react";
import { useApp } from "../../context/AppContext";

const categories = ["Food", "Shopping", "Beauty", "Transport", "Entertainment"];

const AddTransaction = () => {
  const { user, addTransaction } = useApp();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ description: "", amount: "", category: "Food", type: "expense", date: "" });
  const [error, setError] = useState("");

  // Only admins can see this
  if (user.role !== "admin") return null;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.description || !form.amount || !form.date) {
      setError("Please fill all fields.");
      return;
    }
    addTransaction({ ...form, amount: Number(form.amount) });
    setForm({ description: "", amount: "", category: "Food", type: "expense", date: "" });
    setError("");
    setOpen(false);
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg shadow-purple-500/30"
      >
        {open ? "Cancel" : "+ Add Transaction"}
      </button>

      {open && (
        <div className="mt-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 shadow-md grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
          <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="input-field" />
          <input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount (₹)" type="number" className="input-field" />
          <input name="date" value={form.date} onChange={handleChange} type="date" className="input-field" />

          <select name="category" value={form.category} onChange={handleChange} className="input-field dark:bg-gray-800">
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>

          <select name="type" value={form.type} onChange={handleChange} className="input-field dark:bg-gray-800">
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl py-2 transition-all duration-200 shadow-md hover:shadow-lg shadow-green-500/20">
            Save
          </button>

          {error && <p className="text-red-400 text-sm col-span-2">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default AddTransaction;