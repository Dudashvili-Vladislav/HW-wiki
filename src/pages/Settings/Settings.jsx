import React, { useCallback, useState } from "react";
import classes from "./style.module.scss";
import { parseDate } from "../../utils/parseDate";

export const Settings = () => {
  const [profile, setProfile] = useState({
    name: "Name",
    comment: "Comment",
    created_at: "2021-04-06T15:20:06.814Z",
    updated_at: "2021-04-06T15:20:06.814Z",
    login: "Login",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={classes.profile__main}>
        <div className={classes.card}>
          <div className={classes.card__title}></div>
          <div className={classes.card__item}>
            Your profile created at: {parseDate(profile.created_at)}
          </div>
          <div className={classes.card__item}>
            Your profile updated at: {parseDate(profile.updated_at)}
          </div>
          <div className={classes.card__item}>Your login: {profile.login}</div>
          <div className={classes.card__item}>Your name: {profile.name}</div>
        </div>
        <div className={classes.card}></div>

        <form onSubmit={onSubmit} className={classes.card}>
          <div className={classes.card__title}>Change data your profile</div>
          <div className={classes.form__inputs}>
            <div className={classes.card__item}>
              <input
                placeholder="Change your login"
                className={classes.card__item_input}
              />
            </div>
            <div className={classes.card__item}>
              <input
                placeholder="Change your login"
                className={classes.card__item_input}
              />
            </div>
            <div className={classes.card__item}>
              <input
                placeholder="Change your login"
                className={classes.card__item_input}
              />
            </div>
            <div className={classes.card__item}>
              <input
                placeholder="Change your login"
                className={classes.card__item_input}
              />
            </div>
          </div>
          <button type="submit" className={classes.card__button}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
