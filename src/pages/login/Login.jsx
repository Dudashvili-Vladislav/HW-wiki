import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import users from "../../api/service/users";
import { setAuthAction } from "../../redux/reducers/profile";
import classes from "./style.module.scss";

export const Login = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const onChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const login = async () => {
    const token = await users.authUser(form);
    localStorage.setItem("token", token.data.user_jwt);
    dispatch(setAuthAction(true));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login();
    setForm({ login: "", password: "" });
  };

  return (
    <div className={classes.register}>
      <div className={classes.register__container}>
        <div className={classes.register__wrapper}>
          <div className={classes.register__wrapper_title}>авторизация</div>
          <div className={classes.register__wrapper_subTitle}>
            Авторизуйтесь с помощью вашей почты:
          </div>
        </div>
        <div className={classes.register__form}>
          <form onSubmit={onSubmit}>
            <input
              className={classes.register__form_input}
              value={form.login}
              onChange={onChange}
              name="login"
              placeholder="Введите логин"
            />
            <input
              className={classes.register__form_input}
              value={form.password}
              onChange={onChange}
              name="password"
              placeholder="Введите пароль"
            />

            <button className={classes.register__form_btn} type="submit">
              авторизация
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
