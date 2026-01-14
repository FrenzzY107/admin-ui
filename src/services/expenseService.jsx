import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app";

export const getExpenses = async () => {
  const token = localStorage.getItem("token");

  console.log("TOKEN DI EXPENSE SERVICE:", token);

  return axios.get(`${API_URL}/expenses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.data);
};


export const addExpense = async (data) => {
  const token = localStorage.getItem("token");

  return axios.post(`${API_URL}/expenses`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
