import { useEffect, useState } from "react";
import ExpenseComparisonCard from "../components/fragments/ExpenseComparisonCard";


const expensesComparison = [
  {
    id: 1,
    category: "Housing",
    total: 250,
    percent: 15,
    items: [
      { name: "House Rent", amount: 230, date: "17 May 2023" },
      { name: "parking", amount: 20, date: "17 May 2023" },
    ],
  },
  {
    id: 2,
    category: "Food",
    total: 350,
    percent: -8,
    items: [
      { name: "Grocery", amount: 230, date: "17 May 2023" },
      { name: "Restaurant Bill", amount: 120, date: "17 May 2023" },
    ],
  },
  {
    id: 3,
    category: "Transportation",
    total: 50,
    percent: -12,
    items: [
      { name: "Taxi Fare", amount: 30, date: "17 May 2023" },
      { name: "Metro card Bill", amount: 20, date: "17 May 2023" },
    ],
  },
  {
    id: 4,
    category: "Entertainment",
    total: 80,
    percent: -15,
    items: [
      { name: "Movie Ticket", amount: 30, date: "17 May 2023" },
      { name: "iTunes", amount: 50, date: "17 May 2023" },
    ],
  },
  {
    id: 5,
    category: "Shopping",
    total: 420,
    percent: 25,
    items: [
      { name: "shirt", amount: 230, date: "17 May 2023" },
      { name: "Jeans", amount: 190, date: "17 May 2023" },
    ],
  },
  {
    id: 6,
    category: "Other",
    total: 50,
    percent: 23,
    items: [
      { name: "Donation", amount: 30, date: "17 May 2023" },
      { name: "Gift", amount: 20, date: "17 May 2023" },
    ],
  },
];

const LoadingSpinner = () => (
  <div className="fixed inset-100 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
    <div className="flex flex-col items-center">
      <div className="h-12 w-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin" />
      <p className="mt-3 text-sm text-gray-600">Loading expenses...</p>
    </div>
  </div>
);
  

function Expense() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // simulasi fetch data (seperti dari API)
    setTimeout(() => {
      setData(expensesComparison);
      setLoading(false);
    }, 1000); // 1 detik
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-6">
        Expenses Comparison
      </h2>

     {loading ? (
  <>
    {/* ===== SPINNER ===== */}
    <LoadingSpinner />

    {/* ===== SKELETON ===== */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="h-40 rounded-lg bg-gray-200 animate-pulse"
        />
      ))}
    </div>
  </>
) : (
  // ===== DATA =====
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {data.map((item) => (
      <ExpenseComparisonCard key={item.id} data={item} />
    ))}
  </div>
)}

    </div>
  );
}


export default Expense;
