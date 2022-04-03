import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from "./style.module.scss";
import {FetchCreateUsers} from "../../redux/asyncActions/users"
import { useNavigate } from "react-router-dom";

export const Register = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    comment: "",
    login: "",
    password: "",
    isAgree: false,
  });



  const onChange = ({target}) => {
  
    console.log(target.value);
    console.log(target.name);
    setForm({ ...form, [target.name]: target.type === 'checkbox' ? target.checked : target.value })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(FetchCreateUsers(form))
    setForm({name:'',comment:'',login:'',password:'',isAgree:false})
    navigate("/login")
  };
  console.log(form);


  return (
    <div className={classes.register}>
      <div className={classes.register__container}>
        <div className={classes.register__wrapper}>
          <div className={classes.register__wrapper_title}>регистрация</div>
          <div className={classes.register__wrapper_subTitle}>
            Зарегистрируйтесь с помощью вашей почты:
          </div>
        </div>
        <div className={classes.register__form}>
          <form onSubmit={onSubmit}>
            <input
              className={classes.register__form_input}
              value={form.name}
              onChange={onChange}
              name="name"
              placeholder="Ваше имя"
            />
            <input
              className={classes.register__form_input}
              value={form.comment}
              onChange={onChange}
              name="comment"
              placeholder="Введите комментарий"
            />
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
            <div className={classes.register__form_wrapper_checkbox}>
              <label className={classes.register__form_label}>
                <input
                  className={classes.register__form_checkbox}
                  checked={form.isAgree}
                  onChange={onChange}
                  name="isAgree"
                  type="checkbox"
                />
                <span className={classes.register__form_fake}></span>
                <span className={classes.register__form_text}>
                  Я принимаю условия пользовательского соглашения
                </span>
              </label>
            </div>

            <button
              className={classes.register__form_btn}
              disabled={!form.isAgree}
              type="submit"
            >
              регистрация
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
