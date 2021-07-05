import React, { useEffect, useState } from "react";
import {
	View,
	Image,
	SafeAreaView,
	ScrollView,
	Dimensions,
	ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../assets/styles/container.style";
import { Header } from "../../assets/components/header/Header";
import { TitleText, Text } from "../../assets/styles/Text";

export default function SermonSeriesList() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<Header>
				<Text>Back Button</Text>
			</Header>

			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<SafeAreaView></SafeAreaView>
			</ScrollView>
		</View>
	);
}
