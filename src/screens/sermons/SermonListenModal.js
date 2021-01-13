import React from "react";
import { View, Image, SafeAreaView, ScrollView, Dimensions, ActivityIndicator, Button } from "react-native";
import { StatusBar } from "expo-status-bar";


import styles from "../../assets/styles/container.style";
import { TitleText, Text } from "../../assets/styles/Text";
import { ImageContainerImage } from "../../assets/components/container/ImageContainer";

export default function SermonScreen({ route }) {
	const sermon = route.params.sermon;
	
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<SafeAreaView>

					<ImageContainerImage
						source={{
							uri: sermon.sermons_blog_image_url,
						}}
					/>
				
					<Text>{sermon.title.rendered}</Text>
					<Text>{sermon.sermon_audio}</Text>

				</SafeAreaView>
			</ScrollView>
		</View>
	);
}
