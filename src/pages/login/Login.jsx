import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./style.module.scss";
import {FetchAuthUsers} from "../../redux/asyncActions/users"
import { useNavigate } from "react-router-dom";


export const Login = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

  const [form, setForm] = useState({
    login: "",
    password: "",
  });


  const onChange = ({target}) => {
    console.log("first")
  
    console.log(target.value);
    console.log(target.name);
    setForm({ ...form, [target.name]: target.value })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(FetchAuthUsers(form))
    setForm({login:'',password:''})

  };
  console.log(form);


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

            <button
              className={classes.register__form_btn}
              
              type="submit"
            >
              авторизация
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};