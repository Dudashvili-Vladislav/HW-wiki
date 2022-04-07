const defaultState = {
  users: [],
};

const GET_USERS = "GET_USERS";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

// export const addArticlesAction = (payload) => ({ type: GET_ARTICLES, payload });

export const setAllUsersAction = (payload) => ({ type: GET_USERS, payload });
