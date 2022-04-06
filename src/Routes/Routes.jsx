import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profile";
import Settings from "../pages/Settings";
import Stations from "../pages/Stations";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile/*" element={<Profile />}>
          <Route path="settings" element={<Settings />} />
          <Route path="stations" element={<Stations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
