import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, ScrollView, Dimensions, ActivityIndicator, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../assets/styles/container.style";
import { Header } from "../../assets/components/header/Header";
import { TitleText, Text } from "../../assets/styles/Text";
import DefaultButton from "../../assets/components/buttons/DefaultButton";
import { Html5Entities } from "html-entities";

  
export default function SermonScreen({ route }) {
	const { theSermon } = route.params;
	const entities = new Html5Entities();

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<SafeAreaView>
					<Text
						textlarge="true"
						textbold="true"
						style={{ marginTop: 25}}
					>
						{theSermon}
					</Text>

					<Text colorlight="true">Preacher</Text>
					<Text>Scripture</Text>

					<DefaultButton>
						<Text>Download Audio</Text>
					</DefaultButton>

					<DefaultButton>
						<Text>Download Video</Text>
					</DefaultButton>

					<DefaultButton>
						<Text>Listen Now</Text>
					</DefaultButton>
				</SafeAreaView>
			</ScrollView>
		</View>
	);
}
