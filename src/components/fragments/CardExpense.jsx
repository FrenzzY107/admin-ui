function CardExpense({ expense }) {
  if (!expense) return null;

  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h4 className="font-semibold">{expense.category}</h4>
      <p className="text-red-500 font-bold">
        -${expense.amount}
      </p>
    </div>
  );
}

export default CardExpense;
