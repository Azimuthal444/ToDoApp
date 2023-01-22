import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import {
  toggleEmailNotification,
  toggleSMSNotification,
  togglePushNotification,
} from "../redux/actions";

const Settings = ({ settings }) => {
  console.log(settings);
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
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
