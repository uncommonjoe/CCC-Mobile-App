import { StatusBar } from "expo-status-bar";
import React from "react";

import LatestSermonScreen from "./src/screens/sermons/LatestSermonScreen";
import SermonScreen from "./src/screens/sermons/SermonScreen";
import SermonSeriesList from "./src/screens/sermons/SeriesListScreen";
import LordsDayScreen from "./src/screens/lordsDay/SundayScreen";
import CalendarScreen from "./src/screens/connect/CalendarScreen";
import PeopleScreen from "./src/screens/people/PeopleListScreen";
import MoreScreen from "./src/screens/more/MoreListScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const BottomNavigation = createBottomTabNavigator();

var createHomeStack = () => (
	<Stack.Navigator
		screenOptions={() => ({
			gestureEnabled: true,
		})}
	>
		<Stack.Screen name="Home" component={LatestSermonScreen} options={{headerShown: false}} />
		<Stack.Screen name="Sermon" component={SermonScreen} 
			options={{
				title: '',
				headerStyle: {
					backgroundColor: "white",
					borderBottomWidth: 0,
				},
				headerTintColor: '#1A1B1D',
			}}
		  />
		<Stack.Screen name="SermonSeries" component={SermonSeriesList} />
	</Stack.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
			<BottomNavigation.Navigator
				tabBarOptions={{
					activeTintColor: "#0C7B93",
					inactiveTintColor: "rgba(26,27,29, .4)",
					style:{
						backgroundColor: "white",
						borderTopWidth: 1,
						borderTopColor: '#F0F0F0',
						justifyContent: "center",
						height: 85,
					},
				}}

				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => {
						if (route.name === "Sermons") {
							return (
								<FontAwesome
									name="play-circle"
									color={color}
									size={size}
								/>
							);
						} else if (route.name === "Lord's Day") {
							return (
								<FontAwesome5
									name="calendar"
									color={color}
									size={size}
								/>
							);
						} else if (route.name === "Connect") {
							return (
								<FontAwesome
									name="comment"
									color={color}
									size={size}
								/>
							);
						} else if (route.name === "People") {
							return (
								<FontAwesome5
									name="user-alt"
									color={color}
									size={size}
								/>
							);
						}

						return (
							<FontAwesome5
								name="ellipsis-h"
								color={color}
								size={size}
							/>
						);
					},
				})}
			>
				<BottomNavigation.Screen
					name="Sermons"
					children={createHomeStack}
				/>
				<BottomNavigation.Screen
					name="Lord's Day"
					component={LordsDayScreen}
				/>
				<BottomNavigation.Screen
					name="Connect"
					component={CalendarScreen}
				/>
				<BottomNavigation.Screen
					name="People"
					component={PeopleScreen}
				/>
				<BottomNavigation.Screen name="More" component={MoreScreen} />
			</BottomNavigation.Navigator>
		</NavigationContainer>
	);
}
