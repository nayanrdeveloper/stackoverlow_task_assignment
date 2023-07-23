import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import UserScreen from "../screens/UserScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "React") {
            iconName = focused ? "logo-react" : "logo-react";
          } else if (route.name === "ReactNative") {
            iconName = focused ? "logo-android" : "logo-android";
          } else if (route.name === "Node") {
            iconName = focused ? "logo-nodejs" : "logo-nodejs";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="React"
        component={HomeScreen}
        initialParams={{ tag: "react" }}
      />
      <Tab.Screen
        name="ReactNative"
        component={SettingsScreen}
        initialParams={{ tag: "react native" }}
      />
      <Tab.Screen
        name="Node"
        component={UserScreen}
        initialParams={{ tag: "node.js" }}
      />
    </Tab.Navigator>
  );
}
