import users from "../../api/service/users"


export const FetchCreateUsers = ({name,comment,login,password}) => {
  return async function (dispatch) {
    const createUsers = await users.createUsers(name,comment,login,password);
    console.log("createUsers", createUsers);
  };
};

export const FetchAuthUsers = ({login,password}) => {
  return async function (dispatch) {
    const authUsers = await users.authUser(login,password);
    const token = authUsers.data.user_jwt
    localStorage.setItem("token",token)
  };
};

export const FetchGetAllUsers = () => {
  return async function (dispatch) {
    const getAllUsers = await users.getAllUsers();
    console.log("getAllUsers",getAllUsers)
  };
};

export const FetchGetMe = () => {
  return async function(dispatch) {
    const getMe = await users.getMe()
    console.log('getMe',getMe)
  }
}

export const FetchGetUserById = (id) => {
  return async function(dispatch) {
    const getUserById = await users.getUserById(id)
    console.log("getUserById",getUserById)
  }
}

export const FetchDeleteUser = (id) => {
  return async function(dispatch) {
    const deleteUser = await users.deleteUser(id)
    console.log("deleteUser",deleteUser)
  }
}

export const FetchUpdateUser = (id,name,comment,login,password) => {
  return async function(dispatch) {
    const updateUser = await users.updateUser(id,name,comment,login,password)
    console.log("updateUser",updateUser)
  }
}

