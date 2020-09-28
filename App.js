import { StatusBar } from "expo-status-bar";
import React from "react";

import LatestSermonScreen from './src/screens/sermons/LatestSermonScreen';
import LordsDayScreen from './src/screens/lordsDay/SundayScreen'
import CalendarScreen from './src/screens/connect/CalendarScreen'
import PeopleScreen from './src/screens/people/PeopleListScreen'
import MoreScreen from './src/screens/more/MoreListScreen'


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

const BottomNavigation = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Sermons") {
              return (
                <FontAwesome name="play-circle" color={color} size={size} />
              );
            }

            else if (route.name === "Lord's Day") {
              return (
                <FontAwesome5 name="calendar" color={color} size={size} />
              );
            }

            else if (route.name === "Connect") {
              return (
                <FontAwesome name="comment" color={color} size={size} />
              );
            }

            else if (route.name === "People") {
              return (
                <FontAwesome5 name="user-alt" color={color} size={size} />
              );
            }

            return <FontAwesome5 name="ellipsis-h" color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#23A6D9",
          inactiveTintColor: "gray",
        }}
      >
        <BottomNavigation.Screen name="Sermons" component={LatestSermonScreen} />
        <BottomNavigation.Screen name="Lord's Day" component={LordsDayScreen} />
        <BottomNavigation.Screen name="Connect" component={CalendarScreen} />
        <BottomNavigation.Screen name="People" component={PeopleScreen} />
        <BottomNavigation.Screen name="More" component={MoreScreen} />
      </BottomNavigation.Navigator>
    </NavigationContainer>
  );
}

