import React, { Component } from "react";
import {
	ActivityIndicator,
	View,
	FlatList,
} from "react-native";
import { BlurView } from "expo-blur";

import {
	ImageContainer,
	ImageContainerImage,
	HorizListContainer,
} from "../assets/components/container/ImageContainer";
import { TitleText } from "../assets/styles/Text";

class SeriesList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true,
		};
	}

	componentDidMount = () => {
		fetch(
			"https://cornerstonebillings.org/wp-json/wp/v2/wpfc_sermon_series?per_page=5&status=publish&order=desc&orderby=id",
			{
				method: "GET",
			}
		)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					data: responseJson,
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
						{isLoading ? (
							<ActivityIndicator />
						) : (
							<FlatList
								horizontal
								style={{ padding: 15 }}
								data={data}
								keyExtractor={(item, index) => {
									return index.toString();
								}}
								renderItem={({ item, index }) => (
									<ImageContainer horList>
										<HorizListContainer>
											<BlurView
												intensity={25}
												tint={"dark"}
												style={{
													borderRadius: 10,
													position: "absolute",
													top: 0,
													left: 0,
													right: 0,
													bottom: 0,
													justifyContent: "center",
													alignItems: "center",
													zIndex: 3,
												}}
											>
												<TitleText
													textlight="true"
													style={{
														padding: 15,
														textAlign: "center",
													}}
												>
													{item.name}
												</TitleText>
											</BlurView>

											<ImageContainerImage
												style={{ zIndex: 2 }}
												source={
													item.sermons_taxonomy_image !=
													null
														? {
																uri:
																	item.sermons_taxonomy_image,
														  }
														: "https://cornerstonebillings.org/wp-content/uploads/2018/12/rl-355994.jpg"
												}
											/>
										</HorizListContainer>
									</ImageContainer>
								)}
							/>
						)}
					</View>
				)}
			</View>
		);
	}
}
export default SeriesList;
