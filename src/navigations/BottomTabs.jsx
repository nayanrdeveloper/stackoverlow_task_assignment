import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import BookmarkScreen from "../screens/BookmarkScreen";
import QuestionsScreen from "../screens/QuestionsScreen";

const Tab = createBottomTabNavigator();

const commonTagParams = {
  React: "react",
  ReactNative: "react-native",
  Node: "node.js",
};

const tabBarIconSize = 25;
const tabBarIconColor = "#2F6F44";

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "React":
              iconName = focused ? "logo-react" : "logo-react";
              break;
            case "ReactNative":
              iconName = focused ? "logo-android" : "logo-android";
              break;
            case "Node":
              iconName = focused ? "logo-nodejs" : "logo-nodejs";
              break;
            case "Bookmark":
              iconName = focused ? "bookmark-outline" : "bookmark-outline";
              break;
            default:
              iconName = focused ? "help-circle" : "help-circle";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      // Todo: remove this are deprecated
      // tabBarOptions={{
      //   activeTintColor: tabBarIconColor,
      //   inactiveTintColor: "gray",
      // }}
    >
      <Tab.Screen
        name="React"
        component={QuestionsScreen}
        initialParams={{ tag: commonTagParams.React }}
      />
      <Tab.Screen
        name="ReactNative"
        component={QuestionsScreen}
        initialParams={{ tag: commonTagParams.ReactNative }}
      />
      <Tab.Screen
        name="Node"
        component={QuestionsScreen}
        initialParams={{ tag: commonTagParams.Node }}
      />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} />
    </Tab.Navigator>
  );
}
