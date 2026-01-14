import Icon from "../elements/Icon"; // sesuaikan path

function ExpenseComparisonCard({ data }) {
  if (!data) return null;

  const isUp = data.percent > 0;

  const categoryIcons = {
    Housing: Icon.House,
    Food: Icon.Food,
    Transportation: Icon.Transport,
    Entertainment: Icon.Movie,
    Shopping: Icon.Shopping,
    Other: Icon.Other,
  };

  const CategoryIcon = categoryIcons[data.category];
  const ArrowIcon = isUp ? Icon.ArrowUp : Icon.ArrowDown;

  return (
    <div className="bg-white rounded-xl shadow p-5">
      {/* HEADER */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {/* ICON */}
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100">
            {CategoryIcon && <CategoryIcon size={20} />}
          </div>

          {/* TITLE */}
          <div>
            <h4 className="font-semibold">{data.category}</h4>
            <p className="text-xl font-bold">${data.total}</p>
          </div>
        </div>

        {/* PERCENT */}
        <div
          className={`flex items-center gap-1 text-sm font-semibold ${
            isUp ? "text-green-500" : "text-red-500"
          }`}
        >
          <ArrowIcon size={16} />
          {Math.abs(data.percent)}%
        </div>
      </div>

      <p className="text-xs text-gray-400 mb-3">
        Compare to the last month
      </p>

      {/* ITEMS */}
      <div className="space-y-2">
        {data.items.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between border-t border-gray-100 pt-2 text-sm"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-gray-400">
                {item.date}
              </p>
            </div>
            <p className="font-semibold">${item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseComparisonCard;
