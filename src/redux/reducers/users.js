const defaultState = {
  isAuth:false
};

const GET_USER = "GET_USER";
const SET_AUTH = "SET_AUTH"

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, articles: [...state.articles, action.payload] };
      case SET_AUTH:
        return {...state, isAuth: action.payload}
    default:
      return state;
  }
};

// export const addArticlesAction = (payload) => ({ type: GET_ARTICLES, payload });
export const setAuthAction = (payload) => ({ type: SET_AUTH, payload });
