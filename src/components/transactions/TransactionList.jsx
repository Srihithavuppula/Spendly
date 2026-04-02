import { useApp } from "../../context/AppContext";
import TransactionFilter from "./TransactionFilter";
import { formatCurrency, formatDate, getCategoryIcon, exportToCSV } from "../../utils/helpers.jsx";

const TransactionList = () => {
  const { filteredTransactions } = useApp();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-700 p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Transactions</h2>
          <button 
            type="button"
            onClick={() => exportToCSV(filteredTransactions)}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors shadow-sm ml-2"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Export CSV
          </button>
        </div>
        <TransactionFilter />
      </div>

      {filteredTransactions.length === 0 ? (
        // Empty state
        <div className="text-center py-12 text-gray-400 dark:text-gray-500">
          <p className="text-4xl mb-2">🔍</p>
          <p className="font-medium">No transactions found</p>
          <p className="text-sm">Try changing the filters above</p>
        </div>
      ) : (
        <div className="divide-y divide-gray-50 dark:divide-gray-700">
          {filteredTransactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 px-2 rounded-lg transition-colors duration-200">
              <div className="flex items-center gap-3">
                <div className="text-gray-500 dark:text-gray-400 p-2 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-700">
                  {getCategoryIcon(tx.category)}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{tx.description}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-400/80">{formatDate(tx.date)} · {tx.category}</p>
                </div>
              </div>
              <span className={`text-sm font-bold ${tx.type === "income" ? "text-green-500" : "text-red-400"}`}>
                {tx.type === "income" ? "+" : "-"}{formatCurrency(tx.amount)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;