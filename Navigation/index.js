import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Settings from "../Screens/Settings";

import AntDesign from "@expo/vector-icons/AntDesign";

const BottomTab = createBottomTabNavigator();

const Navigation = () => (
  <NavigationContainer>
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home": {
              iconName = "home";
              break;
            }
            case "Settings": {
              iconName = "setting";
              break;
            }
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  </NavigationContainer>
);

export default Navigation;
