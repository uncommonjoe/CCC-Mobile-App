import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import {
	ImageContainerButton,
	ImageContainerImage,
} from "../assets/components/container/ImageContainer";
import { Text } from "../assets/styles/Text";
import { Html5Entities } from "html-entities";
import { withNavigation } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';


class LatestSermon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true,
		};
	}

	componentDidMount = () => {
		fetch(
			"https://cornerstonebillings.org/wp-json/wp/v2/wpfc_sermon?per_page=1&categories=1&order=desc&orderby=date&exclude=54&status=publish",
			{
				method: "GET",
			}
		)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					data: responseJson[0],
				});
			})
			.finally(() => {
				this.setState({ isLoading: false });
			})
			.catch((error) => {
				console.error(error);
			});
	};

	render() {
		const { data, isLoading } = this.state;
		const entities = new Html5Entities();
		const { navigation } = this.props;


		return (
			<View>
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<ImageContainerButton
						onPress={() => {
							navigation.navigate("SermonScreen", { name: 'Brent' });
						}}
					>
						{this.state.data.sermons_blog_image_url ? (
							<ImageContainerImage
								source={{
									uri: this.state.data.sermons_blog_image_url,
								}}
							/>
						) : (
							<Text>Hello world</Text>
						)}

						<Text
							textlarge="true"
							textbold="true"
							style={{ marginTop: 25, marginLeft: 15 }}
						>
							{entities.decode(this.state.data.title.rendered)}
						</Text>

						<Text
							colorlight="true"
							style={{ marginLeft: 15, marginBottom: 10 }}
						>
							{entities.decode(
								this.state.data.sermons_blog_preacher
									.split('">')
									.pop()
									.split("</")[0]
							)}
						</Text>
					</ImageContainerButton>
				)}
			</View>
		);
	}
}

export default function(props){
	const navigation = useNavigation();

  return <LatestSermon { ...props } navigation={navigation} />;
};