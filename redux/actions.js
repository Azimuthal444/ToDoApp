export const TOGGLE_EMAIL_NOTIFICATION = "TOGGLE_EMAIL_NOTIFICATION";
export const TOGGLE_SMS_NOTIFICATION = "TOGGLE_SMS_NOTIFICATION";
export const TOGGLE_PUSH_NOTIFICATION = "TOGGLE_PUSH_NOTIFICATION";

export const toggleEmailNotification = (update) => ({
  type: TOGGLE_EMAIL_NOTIFICATION,
  payload: update,
});

export const toggleSMSNotification = (update) => ({
  type: TOGGLE_SMS_NOTIFICATION,
  payload: update,
});

export const togglePushNotification = (update) => ({
  type: TOGGLE_PUSH_NOTIFICATION,
  payload: update,
});
