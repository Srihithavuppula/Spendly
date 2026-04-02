import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useApp } from "../../context/AppContext";
import { getCategoryColor } from "../../utils/helpers.jsx";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-100 dark:border-gray-700 shadow-xl rounded-xl p-3">
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">{payload[0].name}</p>
        <p className="text-lg text-purple-600 dark:text-purple-400 font-bold">
          ₹{payload[0].value.toLocaleString("en-IN")}
        </p>
      </div>
    );
  }
  return null;
};

const SpendingChart = () => {
  const { spendingByCategory, totalExpenses } = useApp();

  const data = Object.entries(spendingByCategory)
    .map(([name, value]) => ({ name, value }))
    // Sort so the largest segments appear first, looks much better
    .sort((a, b) => b.value - a.value);

  if (data.length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-700 p-6 w-full flex flex-col h-[340px]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Spending Breakdown</h2>
        <span className="text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 px-3 py-1 rounded-full">This Month</span>
      </div>

      <div className="flex-1 relative flex items-center justify-center -mt-4">
        {/* Absolute positioned center label for the donut */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-5">
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500 mt-2">Total Spent</span>
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
            ₹{totalExpenses.toLocaleString("en-IN")}
          </span>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={95}
              paddingAngle={6}
              dataKey="value"
              stroke="none"
              cornerRadius={8}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={getCategoryColor(entry.name)} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            <Legend
              iconType="circle"
              wrapperStyle={{ fontSize: '12px', color: '#6b7280' }}
              verticalAlign="bottom"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpendingChart;