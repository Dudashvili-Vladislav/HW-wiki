import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createStation } from "../../../redux/asyncActions/stations";
import classes from "./style.module.scss";

export const CreateStation = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    comment: "",
  });

  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createStation(form));
    onClose();
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.form__title}>Create station</div>
      <input
        placeholder="name"
        name="name"
        type="text"
        onChange={onChange}
        className={classes.form__input}
        value={form.name}
      />
      <input
        placeholder="comment"
        name="comment"
        type="text"
        onChange={onChange}
        className={classes.form__input}
        value={form.comment}
      />
      <button type="submit" className={classes.form__button}>
        Create Station
      </button>
    </form>
  );
};
