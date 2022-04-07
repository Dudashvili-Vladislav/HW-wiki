import React from "react";
import classes from "./style.module.scss";

export const Details = ({ name, comment }) => {
  return (
    <div className={classes.station}>
      <div className={classes.station__title}>{name}</div>
      <div className={classes.station__comment}>{comment}</div>
    </div>
  );
};
