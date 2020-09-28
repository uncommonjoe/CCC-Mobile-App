import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components";

import styles from "../../assets/styles/container.style";
import DefaultButton from "../../assets/components/buttons/DefaultButton"

export default function LatestSermonScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />

      <SafeAreaView>
        <Text>this is the day</Text>

	      <DefaultButton>
		      <Text>Standard Button</Text>
	      </DefaultButton>
      </SafeAreaView>
    </View>
  );
}

