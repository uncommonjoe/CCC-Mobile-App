import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, SafeAreaView } from "react-native";

import styles from "../../assets/styles/container.style";

export default function MoreScreen() {
	return (
		<View style={styles.container}>
			<StatusBar />

			<SafeAreaView>
				<Text>Hello Joe</Text>
			</SafeAreaView>
		</View>
	);
}
