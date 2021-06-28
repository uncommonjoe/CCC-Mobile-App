import React, { Component, useState, setState } from "react";
import { View, Image, SafeAreaView, ScrollView, Dimensions, ActivityIndicator, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Audio } from 'expo-av';

import styles from "../../assets/styles/container.style";
import AudioPlayer from "../../assets/components/player/AudioPlayer.js";

export default function SermonScreen({ route }) {
	const sermon = route.params.sermon;
	const source = sermon.sermon_audio;
	const soundObject = new Audio.Sound();
    
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />

			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<SafeAreaView>

					<AudioPlayer data={sermon}></AudioPlayer>

				</SafeAreaView>
			</ScrollView>
		</View>
	);
}
