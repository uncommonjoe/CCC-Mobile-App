import React from "react";
import { View, Image, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../../assets/styles/container.style";
import DefaultButton from "../../assets/components/buttons/DefaultButton";
import { Header } from "../../assets/components/header/Header";
import { ImageContainer, ImageContainerImage } from "../../assets/components/container/ImageContainer";
import { TitleText, Text } from "../../assets/styles/Text";
import Verse from "../../api/DailyVerse.js";
import CurrentDate from "../../assets/components/CurrentDate.js";

const { windowWidth } = Dimensions.get("window");

export default function LatestSermonScreen() {
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

						<ImageContainer>
							<ImageContainerImage source={require("../../../src/assets/img/joel.png")} />

							<Text large bold style={{ marginTop: 25, marginLeft: 15 }}>Christian Fasting (Part 3)</Text>
							<Text colorLight style={{ marginLeft: 15, marginBottom: 10 }}>Jeff Romans</Text>
						</ImageContainer>
					</View>

					<View style={{marginHorizontal: 25}}>
						<TitleText>Series</TitleText>
					</View>

					<ScrollView
						style={{ paddingVertical: 15, paddingHorizontal: 25 }}
						horizontal={true}
						snapToAlignment={"center"}
						contentInset={{ top: 0, left: 0, bottom: 0, right: 50, }}>
						<ImageContainer horList>
							<ImageContainerImage source={require("../../../src/assets/img/joel.png")} />
						</ImageContainer>

						<ImageContainer horList>
							<ImageContainerImage source={require("../../../src/assets/img/joel.png")} />
						</ImageContainer>

						<ImageContainer horList>
							<ImageContainerImage source={require("../../../src/assets/img/joel.png")} />
						</ImageContainer>
					</ScrollView>

					<View style={styles.page}>
						<TitleText>Verse of the Day</TitleText>
						<Text colorLight style={{ marginBottom: 10 }}><CurrentDate /></Text>

						<Verse />
					</View>
				</SafeAreaView>
			</ScrollView>
		</View>
	);
}
