import { AppProvider, useApp } from "./context/AppContext";
import Navbar from "./components/layout/Navbar";
import SummarySection from "./components/summary/SummarySection";
import TransactionList from "./components/transactions/TransactionList";
import AddTransaction from "./components/transactions/AddTransaction";
import SpendingChart from "./components/charts/SpendingChart";
import InsightsSection from "./components/insights/InsightsSection";

const Dashboard = () => {
  const { theme } = useApp();

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 flex flex-col">
        <Navbar />

        <main className="max-w-5xl mx-auto px-4 py-6 flex flex-col gap-6 flex-1 w-full">

          {/* Welcome Header */}
          <div className="mb-2">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Hello <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Srihitha</span>!
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium">
              Let's analyze your spending.
            </p>
          </div>

          {/* Summary Cards */}
          <SummarySection />

          {/* Charts + Insights side by side on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpendingChart />
            <InsightsSection />
          </div>

          {/* Add Transaction (admin only) */}
          <AddTransaction />

          {/* Transaction List */}
          <TransactionList />

        </main>

        {/* Footer */}
        <footer className="w-full text-center py-6 mt-6 border-t border-gray-100 dark:border-gray-700/50">
          <p className="text-sm font-medium text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Made by Srihitha
          </p>
        </footer>
      </div>
    </div>
  );
};

const App = () => (
  <AppProvider>
    <Dashboard />
  </AppProvider>
);

export default App;