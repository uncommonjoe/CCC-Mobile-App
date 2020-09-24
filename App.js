import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./src/assets/styles/styles";
// import PrimaryButton from './src/assets/components/Buttons';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

function SermonScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{ width: "100%", flex: 1, marginTop: 64, alignItems: "center" }}
      >
        <Text>Latest Sermon</Text>

        {/* <PrimaryButton title="Test Button" /> */}
      </View>
    </View>
  );
}

function LordsDayScreen({ route, navigation }) {
  // let { userName, action } = route.params;
  return (
    <View style={styles.container}>
      <View
        style={{ width: "100%", flex: 1, marginTop: 64, alignItems: "center" }}
      >
        <Text>Lord's Day</Text>
        <Text>
          {/* {userName} says to {action} */}
        </Text>
      </View>
    </View>
  );
}

function ConnectScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{ width: "100%", flex: 1, marginTop: 64, alignItems: "center" }}
      >
        <Text>Connect</Text>
      </View>
    </View>
  );
}

function PeopleScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{ width: "100%", flex: 1, marginTop: 64, alignItems: "center" }}
      >
        <Text>People</Text>
      </View>
    </View>
  );
}

function MoreScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{ width: "100%", flex: 1, marginTop: 64, alignItems: "center" }}
      >
        <Text>More</Text>
      </View>
    </View>
  );
}

// const Main = createStackNavigator();
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
        <BottomNavigation.Screen name="Sermons" component={SermonScreen} />
        <BottomNavigation.Screen
          name="Lord's Day"
          component={LordsDayScreen}
        />
        <BottomNavigation.Screen
          name="Connect"
          component={ConnectScreen}
        />
        <BottomNavigation.Screen name="People" component={PeopleScreen} />
        <BottomNavigation.Screen name="More" component={MoreScreen} />
      </BottomNavigation.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Main.Navigator
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: "#23A6D9",
    //       },
    //     }}
    //   >
    //     <Main.Screen name="Home" component={HomeScreen} />
    //     <Main.Screen name="Music" component={MusicScreen} />
    //     <Main.Screen name="Settings" component={SettingsTabs} />
    //   </Main.Navigator>
    // </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

