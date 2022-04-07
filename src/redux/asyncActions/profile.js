import User from "../../api/service/users";
import { setAuthAction, setUserAction } from "../reducers/profile";

export const getUser = () => async (dispatch) => {
  const profile = await User.getMe();
  dispatch(setUserAction(profile.data));
};

export const updateUser = (user) => async (dispatch) => {
  const profile = await User.updateUser(user);
  dispatch(setUserAction(profile.data));
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await User.deleteUser(id);
    dispatch(setUserAction(null));
    localStorage.removeItem("token");
    dispatch(setAuthAction(false));
  } catch (error) {
    console.error(error);
  }
};
