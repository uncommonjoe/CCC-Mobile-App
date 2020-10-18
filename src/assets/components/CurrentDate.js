import React, { Component } from "react";
import { Text } from "react-native";


class CurrentDate extends Component {
	render() {
		const date = new Date().getDate();
		const month = new Date().getMonth() + 1;
		const year = new Date().getFullYear();

		switch (month) {
			case 1:
				var monthName = "Jan";
				break;
			case 2:
				var monthName = "Feb";
				break;
			case 3:
				var monthName = "Mar";
				break;
			case 4:
				var monthName = "Apr";
				break;
			case 5:
				var monthName = "May";
				break;
			case 6:
				var monthName = "Jun";
				break;
			case 7:
				var monthName = "Jul";
				break;
			case 8:
				var monthName = "Aug";
				break;
			case 9:
				var monthName = "Sep";
				break;
			case 10:
				var monthName = "Oct";
				break;
			case 11:
				var monthName = "Nov";
				break;
			case 12:
				var monthName = "Dec";
				break;
		}

		return (
			<Text>{monthName + " " + date + ", " + year}</Text>
		)
	}
}

export default CurrentDate;
