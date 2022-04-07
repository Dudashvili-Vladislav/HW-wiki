import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStation } from "../../../redux/asyncActions/stations";
import classes from "./style.module.scss";

export const EditStation = ({ station, onClose }) => {
  const [form, setForm] = useState({
    name: station.name,
    comment: station.comment,
  });
  const onChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStation({ ...form, id: station.id }));
    onClose();
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.form__title}>Edit Station {station.name}</div>
      <input
        placeholder="name"
        name="name"
        type="text"
        onChange={onChange}
        value={form.name}
        className={classes.form__input}
      />
      <input
        placeholder="comment"
        name="comment"
        type="text"
        onChange={onChange}
        value={form.comment}
        className={classes.form__input}
      />
      <button type="submit" className={classes.form__button}>
        Edit Station
      </button>
    </form>
  );
};
