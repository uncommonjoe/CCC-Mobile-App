import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, SafeAreaView } from "react-native";

import styles from "../../assets/styles/container.style";
import DefaultButton from "../../assets/components/buttons/DefaultButton";


export default function LatestSermonScreen() {
  return (
	<View style={styles.container}>
      <StatusBar />

      <SafeAreaView>
        <Text>Latest Sermon</Text>
	      <DefaultButton>
          <Text>Test Default Button</Text>
        </DefaultButton>
      </SafeAreaView>
    </View>
  );
}
