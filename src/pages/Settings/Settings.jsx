import React, { useCallback, useEffect } from "react";
import classes from "./style.module.scss";
import { parseDate } from "../../utils/parseDate";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/asyncActions/profile";
import Form from "./components/form";

export const Settings = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const fetchUser = useCallback(async () => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className={classes.profile__main}>
        {user && (
          <>
            <div className={classes.card}>
              <div className={classes.card__title}></div>

              <div className={classes.card__item}>Your login: {user.login}</div>
              <div className={classes.card__item}>Your name: {user.name}</div>
              <div className={classes.card__item}>
                Your comment: {user.comment}
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.card__item}>
                Your profile created at: {parseDate(user.created_at)}
              </div>
              <div className={classes.card__item}>
                Your profile updated at: {parseDate(user.updated_at)}
              </div>
            </div>

            <Form {...user} />
            
          </>
        )}
      </div>
    </>
  );
};
