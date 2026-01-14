import React, { useContext, useState } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import Logo from "../elements/Logo";
import Input from "../elements/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Icon from "../elements/Icon";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

// 🔥 MUI
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function MainLayout() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // 🔥 STATE LOADING LOGOUT
  const [loadingLogout, setLoadingLogout] = useState(false);

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]" },
  ];

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  // 🔥 LOGOUT TANPA API + LOADING
  const handleLogout = async () => {
    setLoadingLogout(true); // tampilkan backdrop

    // simulasi proses logout
    await new Promise((resolve) => setTimeout(resolve, 2000));

    logout(); // hapus token & user
    navigate("/login", { replace: true });
  };

  return (
    <div className={`flex min-h-screen ${theme.name}`}>
      {/* SIDEBAR */}
      <aside className="bg-defaultBlack w-64 text-white flex flex-col justify-between p-6">
        <div>
          <Logo variant="secondary" />

          <nav className="mt-8">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-md ${
                    isActive ? "bg-primary font-bold" : "hover:bg-special-bg3"
                  }`
                }
              >
                {item.icon}
                <span className="ms-3">{item.name}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-6">
            <p className="mb-2">Themes</p>
            <div className="flex gap-2">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-6 h-6 rounded cursor-pointer`}
                  onClick={() => setTheme(t)}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={handleLogout}
            disabled={loadingLogout}
            className="flex items-center w-full bg-special-bg3 px-4 py-3 rounded-md disabled:opacity-60"
          >
            <Icon.Logout />
            <span className="ms-3">Logout</span>
          </button>

          <div className="mt-6 flex items-center gap-3">
            <div>Avatar</div>
            <div>
              <div>{user?.name || "Moch KK"}</div>
              <small>View Profile</small>
            </div>
          </div>
        </div>
      </aside>

      {/* CONTENT */}
      <div className="flex-1 bg-special-mainBg flex flex-col">
        <header className="px-6 py-5 flex justify-between items-center border-b">
          <h1 className="text-2xl font-bold">
            {user?.name || "Moch KK"}
          </h1>
          <div className="flex items-center gap-4">
            <NotificationsIcon />
            <Input backgroundColor="bg-white" border="border-white" />
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      {/* 🔥 BACKDROP LOADING LOGOUT */}
      <Backdrop
        open={loadingLogout}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 9999,
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default MainLayout;
