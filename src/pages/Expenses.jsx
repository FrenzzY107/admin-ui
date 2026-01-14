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

function Expense() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-6">
        Expenses Comparison
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {expensesComparison.map((item) => (
          <ExpenseComparisonCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Expense;
