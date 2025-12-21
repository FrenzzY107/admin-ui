// src/pages/Dashboard.jsx
import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Card from "../components/elements/Card";
import CardBalance from "../components/fragments/CardBalance";
import CardGoal from "../components/fragments/CardGoal";
import CardUpcomingBil from "../components/fragments/CardUpcomingBil";
import CardRecentTransaction from "../components/fragments/CardRecentTransaction";
import CardStatistic from "../components/fragments/CardStatistic";
import CardExpenseBeakdown from "../components/fragments/CardExpenseBeakdown";
import { transactions, bills, expensesBreakdowns } from "../data";

function dashboard() {
    console.log(transactions);

  return (
		<MainLayout>
        <div className="grid sm:grid-cols-12  gap-6 ">
          <div className="sm:col-span-4">
            <CardBalance />
          </div>
          <div className="sm:col-span-4">
            <CardGoal />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBil data={bills} />
          </div>
          	<div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction  data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBeakdown data={expensesBreakdowns} />
          </div>
        </div>
      </MainLayout>
  );
}

export default dashboard;
