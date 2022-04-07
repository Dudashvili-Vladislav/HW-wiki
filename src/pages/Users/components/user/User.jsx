import React from "react";
import classes from "./style.module.scss";
import { parseDate } from "../../../../utils/parseDate";

export const User = ({ name, login, created_at, updated_at, id }) => {
    
  return (
    <div className={classes.user}>
      <div className={classes.user__info}>
        <div className={classes.user__info_item}>{name}</div>
        <div className={classes.user__info_item}>{login}</div>
        <div className={classes.user__info_item}>{parseDate(created_at)}</div>
        <div className={classes.user__info_item}>{parseDate(updated_at)}</div>
      </div>
    </div>
  );
};
