import React, { Component  } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Audio } from 'expo-av';

import styles from "../../styles/container.style";
import { Text } from "../../styles/Text";
import DefaultButton from "../buttons/DefaultButton";
import { ImageContainerImage } from "../container/ImageContainer";
import AudioSlider from "./AudioSlider";

class AudioPlayer extends Component {
	constructor(props) {
		super(props);
	
		this.sermon = this.props.data;
		this.source = this.sermon.sermon_audio;
		this.soundObject = new Audio.Sound();

		this.state = {
			title: "Play",
			isPlaybackAllowed: true,
			isPlaying: false,
			muted: false,
			rate: 1,
			shouldCorrectPitch: false,
			shouldPlay: false,
			shouldCorrectPitch: false,
			soundDuration: null,
			soundPosition: 0,
			volume: 1,
		};

		this.soundObject.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)  
		this.soundObject.loadAsync({
			uri: this.source,
			progressUpdateIntervalMillis: 500,
			rate: 1,
			shouldCorrectPitch: false,
			shouldPlay: false,
			volume: 1,
			duration: this.sermon.sermon_audio_duration,
		}, {
			shouldPlay: false,
			volume: 1,
		});
		
		const status = this.soundObject.getStatusAsync();
		this.setState({ duration: status.durationMillis });
		console.log(this.soundObject);
	}

	audioPlayPause = async () => {
		if(this.state.playing){
			this.soundObject.pauseAsync(); 
			this.setState({
				playing: false,
				title: "Play"
			})
		}
		else {
			this.soundObject.playAsync();
			this.setState({
				playing: true,
				title: "Pause"
			})
		}
	}

	audioAdjustPosition = async (position) => {
		const status = await this.soundObject.getStatusAsync();
		//let durationLeft = status["durationMillis"] - status["positionMillis"];
		let audioPosition = status["positionMillis"];
		let move;

		switch(position){
			case "forward":
				move = audioPosition + 15000;
				console.log("position: " + move);
			break;

			case "backward":
				move = (audioPosition < 15000 ) ? 0 : audioPosition - 15000;
				console.log("position: " + move);
			break;

			case "drag":
				move = audioPosition;
				console.log("drag: " + move);
			break;
		}

		this.soundObject.playFromPositionAsync(move)
	}

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

	  seek(time) {
		time = Math.floor(time);
		//this.refs.audioElement && this.refs.audioElement.seek(time);
		this.setState({
		  currentPosition: time,
		  paused: false,
		});
	  }

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />

				<ScrollView contentInsetAdjustmentBehavior="automatic">
					<SafeAreaView>

						<ImageContainerImage
							source={{
								uri: this.sermon.sermons_blog_image_url,
							}}
						/>
					
						<Text>Title: {this.sermon.title.rendered}</Text>
						{/* <Text>{this.sermon.sermon_audio}</Text> */}

						<AudioSlider 
							onSeek={this.seek.bind(this.state.soundPosition)}
							trackLength={Math.floor(this.state.soundDuration)}
							onSlidingStart={() => this.setState({ paused: true })}
							currentPosition={this.state.soundPosition}
						/>

						{/* <Slider
							step={1}
							value={totalQuantity}
							maximumValue={Math.floor(this.state.soundDuration)}
							minimumValue={0}
							onSlidingComplete={value => setTotalQuantity(value)}
							onValueChange={value => setDisplayTotalQuantity(value)}
						/> */}


						{/* <Slider
							value={this.state.soundPosition}
							onValueChange={(e) => setValue(e)}
							onTouchEnd={() => setIsTouchEnded(true)}
							onTouchStart={() => setIsTouchEnded(false)}
							maximumValue={Math.floor(this.state.soundDuration)}
							minimumValue={0}
							step={1}
							minimumTrackTintColor="#307ecc"
         					maximumTrackTintColor="#000000"
						/> */}

						


						{/* <Text>{Math.floor(this.state.soundPosition / 60)}:{String(Math.floor(this.state.soundPosition % 60)).padStart(2, "0")}</Text>
						<Text>{this.sermon.sermon_audio_duration}</Text> */}


						<DefaultButton onPress={() => { this.audioAdjustPosition("backward"); }}>
							<Text>-15</Text>
						</DefaultButton>

						<DefaultButton onPress={() => { this.audioPlayPause(); }}>
							<Text>{this.state.title}</Text>
						</DefaultButton>

						<DefaultButton onPress={() => { this.audioAdjustPosition("forward"); }}>
							<Text>+15</Text>
						</DefaultButton>

					</SafeAreaView>
				</ScrollView>
			</View>
		);
	}
}

export default AudioPlayer;