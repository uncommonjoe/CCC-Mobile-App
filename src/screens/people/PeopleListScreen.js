import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, SafeAreaView } from "react-native";

import styles from "../../assets/styles/container.style";
import { Header, HeaderTitle } from "../../assets/components/header/Header";
import { TitleText } from "../../assets/styles/Text";

export default function PeopleScreen() {
	return (
		<View style={styles.container}>
			<StatusBar />
			<Header>
				<HeaderTitle>People</HeaderTitle>
			</Header>

			<SafeAreaView>
				<View style={styles.page}>
					<TitleText>People</TitleText>
				</View>
			</SafeAreaView>
		</View>
	);
}
