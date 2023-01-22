import { combineReducers } from "redux";
import {
  TOGGLE_EMAIL_NOTIFICATION,
  TOGGLE_SMS_NOTIFICATION,
  TOGGLE_PUSH_NOTIFICATION,
} from "./actions";

const settingReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_EMAIL_NOTIFICATION:
      return { ...state, ...action.payload };
    case TOGGLE_SMS_NOTIFICATION:
      return { ...state, ...action.payload };
    case TOGGLE_PUSH_NOTIFICATION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const reducer = combineReducers({
  settings: settingReducer,
});

export default reducer;
