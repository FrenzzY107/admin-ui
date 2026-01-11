export const loginService = async (email, password) => {
  const response = await axios.post(
    `${API_URL}/login`,
    { email, password }
  );

  return response.data; 
};

export const logoutService = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.post(`${API_URL}/logout`, 
     {},
	   {
      headers: {
        Authorization: `Bearer ${token}`,
      }, 
     }
    );
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};