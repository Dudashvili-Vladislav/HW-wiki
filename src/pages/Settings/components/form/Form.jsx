import React, { useState } from "react";
import classes from "./style.module.scss";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../../../../redux/asyncActions/profile";
import { setAuthAction } from "../../../../redux/reducers/profile";

export const Form = ({ name, login, comment, id }) => {
  const [form, setForm] = useState({ name, login, password: "", comment });
  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, ...form }));
  };

  const deleteUserHandler = () => {
    dispatch(deleteUser(id));
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(setAuthAction(false));
  };

  return (
    <form className={classes.card} onSubmit={onSubmit}>
      <div className={classes.card__title}>Change data your profile</div>
      <div className={classes.form__inputs}>
        <div className={classes.card__item}>
          <input
            placeholder="Change your name"
            className={classes.card__item_input}
            onChange={onChange}
            name="name"
            value={form.name}
          />
        </div>
        <div className={classes.card__item}>
          <input
            placeholder="Change your login"
            className={classes.card__item_input}
            onChange={onChange}
            name="login"
            value={form.login}
          />
        </div>
        <div className={classes.card__item}>
          <input
            placeholder="Change your password"
            className={classes.card__item_input}
            onChange={onChange}
            name="password"
            value={form.password}
          />
        </div>
        <div className={classes.card__item}>
          <input
            placeholder="Change your comment"
            className={classes.card__item_input}
            onChange={onChange}
            name="comment"
            value={form.comment}
          />
        </div>
      </div>
      <button className={classes.card__button} onClick={logout}>
        Log out
      </button>
      <button className={classes.card__button} onClick={deleteUserHandler}>
        Delete me
      </button>
      <button type="submit" className={classes.card__button}>
        Edit
      </button>
    </form>
  );
};
