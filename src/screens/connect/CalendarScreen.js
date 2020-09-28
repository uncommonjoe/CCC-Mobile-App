import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, SafeAreaView } from "react-native";

import styles from "../../assets/styles/container.style";

// const Tabs = createStackNavigator();

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />

      <SafeAreaView>
        <Text>Calendar</Text>
      </SafeAreaView>
    </View>
  );
}
