import React, { useCallback, useState } from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { Settings } from "../Settings/Settings";
import classes from "./style.module.scss";

export const Profile = () => {
  const profile = {
    name: "Ivan",
  };
  return (
    <div className={classes.profile}>
      <div className="container">
        <div className={classes.profile__title}>Hello, {profile.name}</div>
        <div className={classes.profile__wrap}>
          <div className={classes.profile__menu}>
            <div className={classes.profile__menu_item}>
              <NavLink to={`/profile/settings`}> Settings</NavLink>
            </div>
            <div className={classes.profile__menu_item}>
              <NavLink to={`/profile/stations`}>Stations</NavLink>
            </div>
            <div className={classes.profile__menu_item}>
              <NavLink to={`/profile/users`}>All users</NavLink>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
