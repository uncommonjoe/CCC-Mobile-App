import styled from "styled-components/native";

const DefaultButton = styled.TouchableOpacity`
	background-color: #fff;
	padding: 20px 25px;
	border-radius: 14px;
	align-self: stretch;
	border: 2px solid #ededed;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`;

const NoStyleButton = styled.TouchableOpacity`
	background-color: transparent;
	padding: 20px 25px;
	align-self: stretch;
`;

export { DefaultButton, NoStyleButton };
