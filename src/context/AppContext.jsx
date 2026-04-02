import { createContext, useContext, useState, useMemo } from "react";
import { transactions as initialTransactions, currentUser } from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [user, setUser] = useState(currentUser);
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const [theme, setTheme] = useState("light");

  // Make sure theme toggle is exposed if intended
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // Toggle user role
  const toggleRole = () => {
    setUser(prev => ({
      ...prev,
      role: prev.role === "admin" ? "viewer" : "admin"
    }));
  };

  // Derived values — computed from transactions (useMemo for optimization)
  const totalIncome = useMemo(
    () => transactions.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0),
    [transactions]
  );
  const totalExpenses = useMemo(
    () => transactions.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0),
    [transactions]
  );
  const balance = useMemo(() => totalIncome - totalExpenses, [totalIncome, totalExpenses]);

  // Filtered list for TransactionList
  const filteredTransactions = useMemo(() => {
    return transactions.filter((t) => {
      const matchCategory = filterCategory === "All" || t.category === filterCategory;
      const matchType = filterType === "All" || t.type === filterType;
      return matchCategory && matchType;
    });
  }, [transactions, filterCategory, filterType]);

  // Spending by category — for charts
  const spendingByCategory = useMemo(() => {
    return transactions
      .filter(t => t.type === "expense")
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {});
  }, [transactions]);

  // Add transaction (admin only)
  const addTransaction = (newTx) => {
    setTransactions(prev => [
      { ...newTx, id: prev.length > 0 ? Math.max(...prev.map(tx => tx.id)) + 1 : 1 },
      ...prev,
    ]);
  };

  return (
    <AppContext.Provider value={{
      user,
      transactions,
      filteredTransactions,
      totalIncome,
      totalExpenses,
      balance,
      spendingByCategory,
      filterCategory,
      filterType,
      setFilterCategory,
      setFilterType,
      addTransaction,
      theme,
      setTheme,
      toggleTheme,
      toggleRole,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);