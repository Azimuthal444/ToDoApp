import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import InputWithButton from "../Components/InputWithButton";

import {
  toggleEmailNotification,
  toggleSMSNotification,
  togglePushNotification,
} from "../redux/actions";

const Settings = ({
  settings: { emailNotifications, smsNotifications, pushNotifications },
  toggleEmailNotification,
  toggleSMSNotification,
  togglePushNotification,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <InputWithButton
          value={"SMS Notifications"}
          buttonName={smsNotifications ? "checkcircle" : "checkcircleo"}
          buttonColor={smsNotifications ? "tomato" : "#D3D3D3"}
          editable={false}
          disableBorderWidth
          onPress={() => toggleSMSNotification(!smsNotifications)}
        />
      </View>
      <View style={styles.container}>
        <InputWithButton
          value={"Push Notifications"}
          buttonName={pushNotifications ? "checkcircle" : "checkcircleo"}
          buttonColor={pushNotifications ? "tomato" : "#D3D3D3"}
          editable={false}
          disableBorderWidth
          onPress={() => togglePushNotification(!pushNotifications)}
        />
      </View>
      <View style={styles.container}>
        <InputWithButton
          value={"E-Mail Notifications"}
          buttonName={emailNotifications ? "checkcircle" : "checkcircleo"}
          buttonColor={emailNotifications ? "tomato" : "#D3D3D3"}
          editable={false}
          disableBorderWidth
          onPress={() => toggleEmailNotification(!emailNotifications)}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps, {
  toggleEmailNotification,
  toggleSMSNotification,
  togglePushNotification,
})(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
