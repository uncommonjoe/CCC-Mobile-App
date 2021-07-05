import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import YoutubePlayer from "react-native-youtube-iframe";

import styles from "../../assets/styles/container.style";
import { Text } from "../../assets/styles/Text";
import { DefaultButton } from "../../assets/components/buttons/Buttons";
import { Html5Entities } from "html-entities";

export default function SermonScreen({ route, navigation }) {
	const sermon = route.params.sermon;
	const entities = new Html5Entities();
	const youtubeVideoKey = entities.decode(
		sermon.sermon_video_url.split("https://youtu.be/").pop()
	);
	const videoUrl = "https://www.youtube.com/embed/" + youtubeVideoKey;

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<SafeAreaView>
					<View>
						<YoutubePlayer
							height={300}
							play={false}
							videoId={youtubeVideoKey}
						/>
					</View>

					<Text
						textlarge="true"
						textbold="true"
						style={{ marginTop: 25 }}
					>
						{entities.decode(sermon.title.rendered)}
					</Text>

					<Text colorlight="true">
						{entities.decode(
							sermon.sermons_blog_preacher
								.split('">')
								.pop()
								.split("</")[0]
						)}
					</Text>

					<Text>{entities.decode(sermon.bible_passage)}</Text>

					<DefaultButton
						onPress={() => {
							navigation.navigate("SermonListen", {
								sermon: sermon,
							});
						}}
					>
						<Text>Listen Now</Text>
					</DefaultButton>
				</SafeAreaView>
			</ScrollView>
		</View>
	);
}
