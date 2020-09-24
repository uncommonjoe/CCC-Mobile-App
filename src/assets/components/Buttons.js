import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import buttons from "../styles/buttonStyle";

function PrimaryButton({ title, action }) {
  return (
    <View>
	<TouchableOpacity 
		title={title} 
		style={buttons.primaryButtonStyle} 
		onPress={() => {
			{action}
		}}
	>
		<Text>{title}</Text>
	</TouchableOpacity>
    </View>
  );
}

export default PrimaryButton