import React, { Component, setState, useState,  } from "react";
import { View } from "react-native";
import Slider from '@react-native-community/slider';


import styles from "../../styles/container.style";
import { Text } from "../../styles/Text";

function pad(n, width, z = 0) {
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  
  const minutesAndSeconds = (position) => ([
	pad(Math.floor(position / 60), 2),
	pad(position % 60, 2),
  ]);
  
  const AudioSlider = ({
	trackLength,
	currentPosition,
	onSeek,
	onSlidingStart,
  }) => {
	const elapsed = minutesAndSeconds(currentPosition);
	const remaining = minutesAndSeconds(trackLength - currentPosition);

	return (
		<View style={styles.container}>
			
			<Text>AudioSlider</Text>

			<Slider
				//value={this.state.soundPosition}
				// onSlidingComplete={this.audioAdjustPosition("drag")}
				// maximumValue={Math.floor(this.state.soundDuration)}
				minimumValue={0}
				step={1}
				minimumTrackTintColor="#307ecc"
				maximumTrackTintColor="#000000"
			/>


			{/* <Text>{Math.floor(this.state.soundPosition / 60)}:{String(Math.floor(this.state.soundPosition % 60)).padStart(2, "0")}</Text>
			<Text>{this.sermon.sermon_audio_duration}</Text> */}

			<Text>/AudioSlider</Text>

		</View>
	);
}


export default AudioSlider;
