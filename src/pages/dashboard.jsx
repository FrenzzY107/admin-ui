import React, { useEffect, useState, useContext } from "react";
import CardBalance from "../components/fragments/CardBalance";
import CardGoal from "../components/fragments/CardGoal";
import CardUpcomingBil from "../components/fragments/CardUpcomingBil";
import CardRecentTransaction from "../components/fragments/CardRecentTransaction";
import CardStatistic from "../components/fragments/CardStatistic";
import CardExpenseBeakdown from "../components/fragments/CardExpenseBeakdown";
import AppSnackbar from "../components/elements/AppSnackbar";
import { getExpenses, addExpense } from "../services/expenseService";
import { goalService } from "../services/dataService";
import { AuthContext } from "../context/AuthContext";
import { transactions, bills, balances, expensesBreakdowns, expensesStatistics } from "../data";
import ModalAddExpense from "../components/elements/ModalAddExpense";
 


function Dashboard() {
  const { logout } = useContext(AuthContext);
const [openModal, setOpenModal] = useState(false);

  const [goals, setGoals] = useState({});
  const [expenses, setExpenses] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data goals",
        severity: "error",
      });

      if (err?.response?.status === 401) {
        logout();
      }
    }
  };

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      console.log("EXPENSES:", data); // ⬅️ WAJIB ADA
      setExpenses(data);
    } catch (err) {
      if (err?.response?.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
    fetchExpenses();
  }, []);

  return (
    <>
      <div className="grid sm:grid-cols-12 gap-6">
        <div className="sm:col-span-4">
          <CardBalance data={balances} />
        </div>

        <div className="sm:col-span-4">
          <CardGoal data={goals} />
        </div>

        <div className="sm:col-span-4">
          <CardUpcomingBil data={bills} />
        </div>

        <div className="sm:col-span-4 sm:row-span-2">
          <CardRecentTransaction data={transactions} />
        </div>

        <div className="sm:col-span-8">
          <CardStatistic data={expensesStatistics}/>
        </div>

        <div className="sm:col-span-8">
          <CardExpenseBeakdown data={expensesBreakdowns} />
        </div>
      </div>

      <AppSnackbar
        {...snackbar}
        onClose={() =>
          setSnackbar((prev) => ({ ...prev, open: false }))
        }
      />
    </>
  );
}

export default Dashboard;
