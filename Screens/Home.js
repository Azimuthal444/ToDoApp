import { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputWithButton from "../Components/InputWithButton";

const Home = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onPressAdd = () => {
    if (inputValue.trim() !== "") {
      setList([...list, { id: list.length + 1, value: inputValue }]);
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
        <InputWithButton
          value={inputValue}
          placeholder={"Add a task"}
          onPress={onPressAdd}
          onChangeText={(text) => setInputValue(text)}
          buttonName={"pluscircle"}
          buttonColor={"#4681f4"}
        />
      </View>

      <View style={{ flex: 80, backgroundColor: "orange" }}>
        <FlatList
          data={list}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
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
