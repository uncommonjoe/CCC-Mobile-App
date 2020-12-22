import styled from "styled-components/native";

const ImageContainer = styled.View`
	background-color: #fff;
	padding: 10px;
	border-radius: 23px;
	border: 2px solid #ededed;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
	align-content: flex-start;

	${({ horList }) => {
		switch (true) {
			case horList:
				return "margin-right: 15px; width: 300px;";
		}
	}}
`;

const ImageContainerButton = styled.TouchableOpacity`
	background-color: #fff;
	padding: 10px;
	border-radius: 23px;
	border: 2px solid #ededed;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
	align-content: flex-start;
`;

const ImageContainerImage = styled.Image`
	border-radius: 14px;
	height: 170px;
	resize-mode: cover;
	width: 100%;
	opacity: 0.9;
`;

const HorizListContainer = styled.View`
	height: 170px;
	align-items: center;
	position: relative;
`;

export {
	ImageContainer,
	ImageContainerButton,
	ImageContainerImage,
	HorizListContainer,
};
