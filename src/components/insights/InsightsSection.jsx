import { useApp } from "../../context/AppContext";
import { formatCurrency } from "../../utils/helpers.jsx";

const InsightsSection = () => {
  const { transactions, spendingByCategory, totalExpenses, totalIncome } = useApp();

  // Top spending category
  const topCategory = Object.entries(spendingByCategory).sort((a, b) => b[1] - a[1])[0];

  // How many times Zomato was ordered
  const zomatoCount = transactions.filter(t => t.description.toLowerCase().includes("zomato")).length;
  const zomatoTotal = transactions.filter(t => t.description.toLowerCase().includes("zomato")).reduce((s, t) => s + t.amount, 0);

  // Savings rate
  const savingsRate = totalIncome > 0 ? (((totalIncome - totalExpenses) / totalIncome) * 100).toFixed(0) : 0;

  const insights = [
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>,
      text: `Zomato got ${formatCurrency(zomatoTotal)} from you across ${zomatoCount} orders this month👀`,
      color: "text-orange-500 bg-orange-100 dark:bg-orange-900/30",
    },
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
      text: topCategory
        ? `Your biggest spending category is ${topCategory[0]} at ${formatCurrency(topCategory[1])}`
        : "No spending data yet",
      color: "text-purple-500 bg-purple-100 dark:bg-purple-900/30",
    },
    {
      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      text: savingsRate > 0
        ? `You saved ${savingsRate}% of your income this month ${savingsRate > 30 ? "— great job! 🎉" : "— try to save more! 💪"}`
        : "You spent more than you earned this month 😬",
      color: savingsRate > 0 ? "text-green-500 bg-green-100 dark:bg-green-900/30" : "text-red-500 bg-red-100 dark:bg-red-900/30",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-700 p-5">
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Insights</h2>
      </div>
      <div className="flex flex-col gap-3">
        {insights.map((insight, i) => (
          <div key={i} className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200 border border-transparent dark:border-gray-600">
            <div className={`p-2 rounded-xl flex items-center justify-center ${insight.color}`}>
              {insight.icon}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{insight.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsSection;