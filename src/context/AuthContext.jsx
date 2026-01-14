import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        return jwtDecode(token);
      } catch {
        localStorage.removeItem("token");
        return null;
      }
    }
    return null;
  });

const login = (token) => {
  if (typeof token !== "string") {
    console.error("TOKEN TIDAK VALID:", token);
    return;
  }

  localStorage.setItem("token", token);
  setUser(jwtDecode(token));
};

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
