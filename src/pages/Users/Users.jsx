import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./style.module.scss";
import { getUsers } from "../../redux/asyncActions/users";
import User from "./components/user";

export const Users = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className={classes.users}>
      {users.length > 0
        ? users.map((user) => <User {...user} key={user.id} />)
        : "users not found"}
    </div>
  );
};
