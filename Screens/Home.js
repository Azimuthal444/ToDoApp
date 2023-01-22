import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToDoInput from "../Components/ToDoInput";

const Home = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onPressAdd = () => {
    if (inputValue.trim() !== "") {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <ToDoInput
          value={inputValue}
          placeholder={"Add a task"}
          onPress={onPressAdd}
          onChangeText={(text) => setInputValue(text)}
        />
      </View>
      <View style={{ flex: 80, backgroundColor: "orange" }} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CBE1EF",
  },
});
