import { useApp } from "../../context/AppContext";
import SummaryCard from "./SummaryCard";

const SummarySection = () => {
  const { balance, totalIncome, totalExpenses } = useApp();

  const WalletIcon = <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
  const TrendUpIcon = <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
  const TrendDownIcon = <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <SummaryCard title="Total Balance"  amount={balance}        icon={WalletIcon} color="bg-green-50 text-green-600"  />
      <SummaryCard title="Total Income"   amount={totalIncome}    icon={TrendUpIcon} color="bg-blue-50 text-blue-600"   />
      <SummaryCard title="Total Expenses" amount={totalExpenses}  icon={TrendDownIcon} color="bg-pink-50 text-pink-600"   />
    </div>
  );
};

export default SummarySection;