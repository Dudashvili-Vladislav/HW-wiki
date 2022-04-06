import React from "react";
import classes from "./style.module.scss";
import { parseDate } from "../../../utils/parseDate";
import pen from "../../../images/icons/pen.svg";
import remove from "../../../images/icons/remove.svg";

export const Station = ({
  id,
  name,
  comment,
  created_at,
  updated_at,
  onDelete,
  onEdit,
}) => {
  return (
    <div className={classes.station}>
      <div className={classes.station__info}>
        <div className={classes.station__info_item}>{name}</div>
        <div className={classes.station__info_item}>
          {comment || "No commented"}
        </div>
        <div className={classes.station__info_item}>
          {parseDate(created_at)}
        </div>
        <div className={classes.station__info_item}>
          {parseDate(updated_at)}
        </div>
      </div>
      <div className={classes.station__buttons}>
        <div
          className={classes.station__buttons_item}
          onClick={() => onDelete(id)}
        >
          <img src={remove} alt="remove" />
        </div>
        <div
          className={classes.station__buttons_item}
          onClick={() => onEdit(id)}
        >
          <img src={pen} alt="edit" />
        </div>
      </div>
    </div>
  );
};
