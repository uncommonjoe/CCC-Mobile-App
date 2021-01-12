import React from "react";
import { View, Image, SafeAreaView, ScrollView, Dimensions, ActivityIndicator, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import TrackPlayer from 'react-native-track-player';


import styles from "../../assets/styles/container.style";
import { TitleText, Text } from "../../assets/styles/Text";
import DefaultButton from "../../assets/components/buttons/DefaultButton";
import { Html5Entities } from "html-entities";
import { ImageContainerImage } from "../../assets/components/container/ImageContainer";

export default function SermonScreen({ route }) {
	const sermon = route.params.sermon;

	TrackPlayer.setupPlayer().then(() => {
		// The player is ready to be used
	});

	//AppRegistry.registerComponent(...);
	TrackPlayer.registerPlaybackService(() => require('../../assets/services/TrackPlayerService.js'));

	var track = {
		id: 'unique track id', // Must be a string, required
		
		url: sermon.sermon_audio,
	
		title: 'Avaritia',
		artist: 'deadmau5',
		album: 'while(1<2)',
		genre: 'Progressive House, Electro House',
		date: '2014-05-20T07:00:00+00:00', // RFC 3339
		
		artwork: sermon.sermons_blog_image_url
	};

	// let state = await TrackPlayer.getState();

	// let trackId = await TrackPlayer.getCurrentTrack();
	// let trackObject = await TrackPlayer.getTrack(trackId);

	// // Position, buffered position and duration return values in seconds
	// let position = await TrackPlayer.getPosition();
	// let buffered = await TrackPlayer.getBufferedPosition();
	// let duration = await TrackPlayer.getDuration();

	class PlayerBar extends TrackPlayer.ProgressComponent {

		render() {
			return (
				<View>
					<Text>{formatTime(this.state.position)}</Text>
					<ProgressBar
						progress={this.getProgress()}
						buffered={this.getBufferedProgress()}
					/>
				</View>
			);
		}
		
	}

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
					<PlayerBar></PlayerBar>
				
					<Text>{sermon.title.rendered}</Text>
					<Text>{sermon.sermon_audio}</Text>

				</SafeAreaView>
			</ScrollView>
		</View>
	);
}
