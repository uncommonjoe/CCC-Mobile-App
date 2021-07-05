import React from "react";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../assets/styles/container.style";
import { Header, HeaderTitle } from "../../assets/components/header/Header";
import { TitleText, Text } from "../../assets/styles/Text";

export default function LatestSermonScreen() {
	return (
		<View style={styles.container}>
			<StatusBar />
			<Header>
				<HeaderTitle>Lord's Day</HeaderTitle>
			</Header>

			<SafeAreaView>
				<View style={styles.page}>
					<TitleText>Order of Worship</TitleText>
					<Text>Sep 27 2020</Text>

					<View>
						<Text>Welcome and Introduction</Text>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}
