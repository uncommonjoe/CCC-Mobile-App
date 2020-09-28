import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

class PrimaryButton extends Component {
  render() {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Test
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 14,
    textAlignVertical: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    color: "blue",
    borderColor: "#EDEDED",
    borderWidth: 1,
  },
  buttonText: {
    color: "black",
    paddingBottom: 20,
    fontSize: 18,
  },
});

export default PrimaryButton;
