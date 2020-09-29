import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, SafeAreaView } from "react-native";

import styles from "../../assets/styles/container.style";
import { Header, HeaderTitle } from "../../assets/components/header/Header";
import { TitleText } from "../../assets/styles/Text";

// const Tabs = createStackNavigator();

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header>
        <HeaderTitle>Calendar</HeaderTitle>
      </Header>

      <SafeAreaView>
        <View style={styles.page}>
          <TitleText>Calendar</TitleText>
        </View>
      </SafeAreaView>
    </View>
  );
}
