import React, { useState } from "react";
import Icon from "./Icon";

const categoryIcon = {
  housing: <Icon.House />,
  food: <Icon.Food />,
  transportation: <Icon.Transport />,
  entertainment: <Icon.Gamepad />,
  shopping: <Icon.Shopping />,
  others: <Icon.Other />,
};

function CardExpenseItem({ category, amount, percentage, trend, detail }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      {/* HEADER */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex gap-4">
          <div className="bg-special-bg px-3 py-4 rounded-lg">
            {categoryIcon[category] || <Icon.Wallet />}
          </div>

          <div>
            <p className="capitalize text-gray-02">{category}</p>
            <p className="text-lg font-bold">${amount}</p>

            <div className="flex items-center gap-1 text-sm">
              <span className="text-gray-02">{percentage}%</span>
              {trend === "up" ? (
                <Icon.ArrowUp className="text-green-500" />
              ) : (
                <Icon.ArrowDown className="text-red-500" />
              )}
            </div>
          </div>
        </div>

        <Icon.ArrowRight
          className={`transition ${open ? "rotate-90" : ""}`}
        />
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full bg-gray-200 h-2 rounded mt-3">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* DETAIL */}
      {open && (
        <div className="mt-4 text-sm text-gray-02 space-y-2">
          {detail.map((d, i) => (
            <div key={i} className="flex justify-between">
              <span>{d.item}</span>
              <span>${d.amount}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardExpenseItem;
