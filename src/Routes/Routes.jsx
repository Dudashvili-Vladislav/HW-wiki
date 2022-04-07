import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profile";
import Settings from "../pages/Settings";
import Stations from "../pages/Stations";
import { Users } from "../pages/Users/Users";
import { useSelector } from "react-redux";

export const RoutesComponent = () => {
  const { isAuth } = useSelector((state) => state.profile);
  return (
    <BrowserRouter>
      {isAuth ? (
        <Routes>
          <Route path="/*" element={<Profile />}>
            <Route path="settings" element={<Settings />} />
            <Route path="stations" element={<Stations />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<Navigate to="/settings" />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
