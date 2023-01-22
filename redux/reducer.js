import { combineReducers } from "redux";
import {
  TOGGLE_EMAIL_NOTIFICATION,
  TOGGLE_SMS_NOTIFICATION,
  TOGGLE_PUSH_NOTIFICATION,
} from "./actions";

const settingReducer = (
  state = {
    emailNotifications: false,
    smsNotifications: false,
    pushNotifications: false,
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_EMAIL_NOTIFICATION:
      return { ...state, emailNotifications: action.payload };
    case TOGGLE_SMS_NOTIFICATION:
      return { ...state, smsNotifications: action.payload };
    case TOGGLE_PUSH_NOTIFICATION:
      return { ...state, pushNotifications: action.payload };
    default:
      return state;
  }
};

const reducer = combineReducers({
  settings: settingReducer,
});

export default reducer;
