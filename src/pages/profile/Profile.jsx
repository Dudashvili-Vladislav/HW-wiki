import React from "react";
import classes from "./style.module.scss";

export const Profile = () => {
  return (
    <>
      <div className={classes.profile}>
        <div className={classes.container}>
          <div className={classes.profile__options}>
            <div className={classes.profile__settings}>settings</div>
          </div>
        </div>
      </div>
    </>
  );
};
