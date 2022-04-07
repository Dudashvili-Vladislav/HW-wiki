import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/users";
import { stationsReducer } from "./reducers/stations";
import { profile } from "./reducers/profile";

const rootReducer = combineReducers({
  userReducer,
  stationsReducer,
  profile,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
