import Users from "../../api/service/users";
import { setAllUsersAction } from "../reducers/users";

export const FetchCreateUsers = ({ name, comment, login, password }) => {
  return async function (dispatch) {
    const createUsers = await Users.createUsers(name, comment, login, password);
    console.log("createUsers", createUsers);
  };
};

export const FetchAuthUsers = ({ login, password }) => {
  return async function (dispatch) {
    const authUsers = await Users.authUser(login, password);
    const token = authUsers.data.user_jwt;
    localStorage.setItem("token", token);
  };
};

export const getUsers = () => {
  return async function (dispatch) {
    const users = await Users.getAllUsers();
    dispatch(setAllUsersAction(users.data));
  };
};

export const FetchGetMe = () => {
  return async function (dispatch) {
    const getMe = await Users.getMe();
    console.log("getMe", getMe);
  };
};

export const FetchGetUserById = (id) => {
  return async function (dispatch) {
    const getUserById = await Users.getUserById(id);
    console.log("getUserById", getUserById);
  };
};

export const FetchDeleteUser = (id) => {
  return async function (dispatch) {
    const deleteUser = await Users.deleteUser(id);
    console.log("deleteUser", deleteUser);
  };
};

export const FetchUpdateUser = (id, name, comment, login, password) => {
  return async function (dispatch) {
    const updateUser = await Users.updateUser(
      id,
      name,
      comment,
      login,
      password
    );
    console.log("updateUser", updateUser);
  };
};
