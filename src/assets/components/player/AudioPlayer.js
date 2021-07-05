import React, { Component } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Audio } from "expo-av";
import { FontAwesome5 } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Dimensions } from "react-native";

import styles from "../../styles/container.style";
import { TitleText, Text } from "../../styles/Text";
import { NoStyleButton } from "../buttons/Buttons";
import { ImageContainerImage } from "../container/ImageContainer";
import AudioSlider from "./AudioSlider";

class AudioPlayer extends Component {
	constructor(props) {
		super(props);

		const windowWidth = Dimensions.get("window").width;
		this.coverDimension = windowWidth - 100;

		this.sermon = this.props.data;
		this.source = this.sermon.sermon_audio;
		this.soundObject = new Audio.Sound();

		this.state = {
			title: "play",
			isPlaybackAllowed: true,
			isPlaying: false,
			muted: false,
			rate: 1,
			shouldCorrectPitch: false,
			shouldPlay: false,
			shouldCorrectPitch: false,
			soundDuration: 40,
			soundPosition: 0,
			volume: 1,
		};

		this.soundObject.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
		this.soundObject.loadAsync(
			{
				uri: this.source,
				progressUpdateIntervalMillis: 500,
				rate: 1,
				shouldCorrectPitch: false,
				shouldPlay: false,
				volume: 1,
				duration: this.sermon.sermon_audio_duration,
			},
			{
				shouldPlay: false,
				volume: 1,
			}
		);

		const status = this.soundObject.getStatusAsync();
		this.setState({ duration: status.durationMillis });
		console.log(this.soundObject);
	}

	audioPlayPause = async () => {
		if (this.state.playing) {
			this.soundObject.pauseAsync();
			this.setState({
				playing: false,
				title: "play",
			});
		} else {
			this.soundObject.playAsync();
			this.setState({
				playing: true,
				title: "pause",
			});
		}
	};

	audioAdjustPosition = async (position) => {
		const status = await this.soundObject.getStatusAsync();
		let audioPosition = status["positionMillis"];
		let move;

		switch (position) {
			case "forward":
				move = audioPosition + 30000;
				console.log("position: " + move);
				break;

			case "backward":
				move = audioPosition < 15000 ? 0 : audioPosition - 15000;
				console.log("position: " + move);
				break;
		}

		this.soundObject.playFromPositionAsync(move);
	};

	onPlaybackStatusUpdate = (status) => {
		if (status.isLoaded) {
			this.setState({
				soundDuration: status.durationMillis / 1000 ?? null,
				soundPosition: status.positionMillis / 1000,
				shouldPlay: status.shouldPlay,
				isPlaying: status.isPlaying,
				rate: status.rate,
				muted: status.isMuted,
				volume: status.volume,
				shouldCorrectPitch: status.shouldCorrectPitch,
				isPlaybackAllowed: true,
			});
		} else {
			this.setState({
				soundDuration: null,
				soundPosition: null,
				isPlaybackAllowed: false,
			});
			if (status.error) {
				console.log(`FATAL PLAYER ERROR: ${status.error}`);
			}
		}
	};

	seek = (time) => {
		time = Math.floor(time);
		this.setState({
			currentPosition: time,
			paused: false,
		});
	};

	render() {
		return (
			<View style={(styles.container, { paddingHorizontal: 50 })}>
				<StatusBar barStyle="light-content" />

				<ScrollView contentInsetAdjustmentBehavior="automatic">
					<SafeAreaView>
						<ImageContainerImage
							source={{
								uri: this.sermon.sermons_blog_image_url,
							}}
							style={{
								width: this.coverDimension,
								height: this.coverDimension,
							}}
						/>

						<Slider
							style={{ marginTop: 25 }}
							value={this.state.soundPosition}
							//onValueChange={(e) => setValue(e)}
							// onTouchEnd={() => setIsTouchEnded(true)}
							// onTouchStart={() => setIsTouchEnded(false)}
							maximumValue={Math.floor(this.state.soundDuration)}
							minimumValue={0}
							step={1}
							minimumTrackTintColor="#1A1B1D"
							maximumTrackTintColor="#D1D1D1"
							thumbTintColor="#1A1B1D"
						/>

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 25,
							}}
						>
							<Text
								style={{ fontSize: 12, fontColor: "#D1D1D1" }}
							>
								{Math.floor(this.state.soundPosition / 60)}:
								{String(
									Math.floor(this.state.soundPosition % 60)
								).padStart(2, "0")}
							</Text>

							<Text
								style={{ fontSize: 12, fontColor: "#D1D1D1" }}
							>
								{this.sermon.sermon_audio_duration}
							</Text>
						</View>

						<View style={styles.flexRow}>
							<TitleText>{this.sermon.title.rendered}</TitleText>
							{/* <Text>{this.sermon.sermon_audio}</Text> */}
						</View>

						<View
							style={{
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								marginTop: 25,
							}}
						>
							<NoStyleButton
								onPress={() => {
									this.audioAdjustPosition("backward");
								}}
								style={styles.flexRow}
							>
								<FontAwesome5
									name="backward"
									size={25}
									style={{
										marginRight: 5,
									}}
								></FontAwesome5>

								<Text style={{ fontWeight: "bold" }}>15</Text>
							</NoStyleButton>

							<NoStyleButton
								onPress={() => {
									this.audioPlayPause();
								}}
								style={{
									backgroundColor: "#1A1B1D",
									width: 80,
									height: 80,
									borderRadius: 40,
									alignItems: "center",
									justifyContent: "center",
									marginHorizontal: 10,
								}}
							>
								<FontAwesome5
									name={this.state.title}
									size={35}
									style={{ color: "white" }}
								></FontAwesome5>
							</NoStyleButton>

							<NoStyleButton
								onPress={() => {
									this.audioAdjustPosition("forward");
								}}
								style={styles.flexRow}
							>
								<Text style={{ fontWeight: "bold" }}>30</Text>

								<FontAwesome5
									name="forward"
									size={25}
									style={{
										marginLeft: 5,
									}}
								></FontAwesome5>
							</NoStyleButton>
						</View>
					</SafeAreaView>
				</ScrollView>
			</View>
		);
	}
}

export default AudioPlayer;
