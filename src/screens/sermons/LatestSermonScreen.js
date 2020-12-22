import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../assets/styles/container.style";
import DefaultButton from "../../assets/components/buttons/DefaultButton";
import { Header } from "../../assets/components/header/Header";
import { ImageContainer, ImageContainerImage } from "../../assets/components/container/ImageContainer";
import { TitleText, Text } from "../../assets/styles/Text";
import Verse from "../../api/GetDailyVerse.js";
import CurrentDate from "../../assets/components/CurrentDate.js";
import LatestSermon from "../../api/GetLatestSermon.js";
import SeriesList from "../../api/GetSeriesList.js";
  
export default function LatestSermonScreen() {
	const { windowWidth } = Dimensions.get("window");

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<Header>
				<Image style={{ resizeMode: "cover", height: 25, width: 190 }} source={require("../../../src/assets/img/logo.png")} />
			</Header>

			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<SafeAreaView>
					<View style={styles.page}>
						<TitleText style={{ marginBottom: 25 }}>Latest Sermon</TitleText>

						<LatestSermon />
					</View>

					<View style={{marginHorizontal: 25}}>
						<TitleText>Series</TitleText>
					</View>

					<SeriesList />

					<View style={styles.page}>
						<TitleText>Verse of the Day</TitleText>
						<Text colorlight="true" style={{ marginBottom: 10 }}><CurrentDate /></Text>

						<Verse />
					</View>
				</SafeAreaView>
			</ScrollView>
		</View>
	);
}
