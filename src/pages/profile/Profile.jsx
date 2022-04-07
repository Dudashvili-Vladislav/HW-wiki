import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./style.module.scss";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className={classes.profile}>
      <div className="container">
        <div className={classes.profile__title}>Hello, {user && user.name}</div>
        <div className={classes.profile__wrap}>
          <div className={classes.profile__menu}>
            <div className={classes.profile__menu_item}>
              <NavLink to={`/settings`}> Settings</NavLink>
            </div>
            <div className={classes.profile__menu_item}>
              <NavLink to={`/stations`}>Stations</NavLink>
            </div>
            <div className={classes.profile__menu_item}>
              <NavLink to={`/users`}>All users</NavLink>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
