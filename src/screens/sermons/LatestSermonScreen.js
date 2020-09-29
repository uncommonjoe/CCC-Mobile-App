import React from "react";
import { View, Image, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../assets/styles/container.style";
import DefaultButton from "../../assets/components/buttons/DefaultButton";
import { Header } from "../../assets/components/header/Header";
import {
  ImageContainer,
  ImageContainerImage,
} from "../../assets/components/container/ImageContainer";
import { TitleText, Text } from "../../assets/styles/Text";

export default function LatestSermonScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header>
        <Image
          style={{ resizeMode: "cover", height: 25, width: 190 }}
          source={require("../../../src/assets/img/logo.png")}
        />
      </Header>

      <SafeAreaView>
        <View style={styles.page}>
          <TitleText style={{ marginBottom: 25 }}>Latest Sermon</TitleText>
          
          <ImageContainer style={{ marginBottom: 25 }}>
            <ImageContainerImage
              source={require("../../../src/assets/img/joel.png")}
            />

            <Text large bold style={{ marginTop: 25, marginLeft: 15 }}>
              Christian Fasting (Part 3)
            </Text>
            <Text colorLight style={{ marginLeft: 15 }}>
              Jeff Romans
            </Text>
          </ImageContainer>
          <DefaultButton>
            <Text>Test Default Button</Text>
          </DefaultButton>
        </View>
      </SafeAreaView>
    </View>
  );
}
