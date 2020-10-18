import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import { Text } from "../assets/styles/Text";

class Verse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true,
		};
	}

	componentDidMount = () => {
		fetch("https://beta.ourmanna.com/api/v1/get/?format=json", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				this.setState({
					data: responseJson.verse.details,
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

		return (
			<View>
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<View>
						<Text large>{this.state.data.text}</Text>
						<Text bold>{this.state.data.reference}</Text>
					</View>
				)}
			</View>
		);
	}
}
export default Verse;
