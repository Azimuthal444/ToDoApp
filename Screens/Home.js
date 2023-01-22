import { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputWithButton from "../Components/InputWithButton";

const Home = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onPressAdd = () => {
    if (inputValue.trim() !== "") {
      setList([...list, { id: Date.now(), value: inputValue }]);
      setInputValue("");
    }
  };

  const onPressRemove = (idToBeDeleted) => {
    const indexOfItem = list.findIndex(({ id }) => id === idToBeDeleted);
    newArray = Array.from(list);
    newArray.splice(indexOfItem, 1);
    setList([...newArray]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputViewContainer}>
        <InputWithButton
          value={inputValue}
          placeholder={"Add a task"}
          onPress={onPressAdd}
          onChangeText={(text) => setInputValue(text)}
          buttonName={"pluscircle"}
          buttonColor={"#4681f4"}
        />
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          contentContainerStyle={{ alignItems: "center" }}
          data={list}
          renderItem={({ item }) => (
            <InputWithButton
              value={item.value}
              buttonName={"minuscircle"}
              buttonColor={"#D2686E"}
              editable={false}
              disableBorderWidth
              onPress={() => onPressRemove(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="always"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputViewContainer: {
    flex: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  flatListContainer: { flex: 80 },
});
