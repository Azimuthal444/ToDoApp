import {
  Button,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const ToDoInput = ({
  value = "",
  placeholder = "",
  onPress = null,
  onChangeText = null,
}) => (
  <View style={styles.textInputContainer}>
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      value={value}
      onChangeText={onChangeText}
    />
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <AntDesign name={"pluscircle"} size={24} color={"black"} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  textInputContainer: {
    width: "80%",
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#000",
    borderRadius: 5,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: { flex: 90 },
  addButton: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ToDoInput;
