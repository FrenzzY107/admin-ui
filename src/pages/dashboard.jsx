import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Card from "../components/elements/Card";
import CardBalance from "../components/fragments/CardBalance";
import CardGoal from "../components/fragments/CardGoal";
import CardUpcomingBil from "../components/fragments/CardUpcomingBil";
import CardRecentTransaction from "../components/fragments/CardRecentTransaction";
import CardStatistic from "../components/fragments/CardStatistic";
import CardExpenseBeakdown from "../components/fragments/CardExpenseBeakdown";
import { transactions, bills, expensesBreakdowns, balances, goals, expensesStatistics } from "../data";
import AppSnackbar from "../components/elements/AppSnackbar";

import { goalService } from "../services/dataService";
import { AuthContext } from "../context/AuthContext";

function dashboard() {
  	const [goals, setGoals] = useState({});
    
    const [snackbar, setSnackbar] = useState({
      open: false,
      message: "",
      severity: "success",
    });


    const handleCloseSnackbar = () => {
      setSnackbar((prev) => ({ ...prev, open: false }));
    };    

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      setSnackbar({
      open: true,
      message: "Gagal mengambil data goals:",
      severity: "error",
    });
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);
  
  console.log(goals);

  return (
		<MainLayout>
        <div className="grid sm:grid-cols-12  gap-6 ">
          <div className="sm:col-span-4">
            <CardBalance data={balances}/>
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals} />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBil data={bills} />
          </div>
          	<div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction  data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics} />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBeakdown data={expensesBreakdowns} />
          </div>
        </div>


        	<AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
  );
}

export default dashboard;
