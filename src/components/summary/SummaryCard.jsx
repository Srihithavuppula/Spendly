import { formatCurrency } from "../../utils/helpers.jsx";

const SummaryCard = ({ title, amount, icon, color }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-gray-100 dark:border-gray-700 flex items-center gap-4`}>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${color} dark:bg-opacity-20`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-0.5">{formatCurrency(amount)}</p>
      </div>
    </div>
  );
};

export default SummaryCard;