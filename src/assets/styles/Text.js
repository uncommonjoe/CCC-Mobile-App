import styled from "styled-components/native";

const Text = styled.Text`
  color: ${(props) =>
    props.colorLight ? "rgba(26, 27, 29, 0.4)" : "rgba(26, 27, 29, 1)"};
  font-weight: ${(props) => (props.bold ? "700" : "normal")};
  font-size: 16px;

  ${({ large, small }) => {
    switch (true) {
      case large:
        return "font-size: 20px;";
      case small:
        return "font-size: 13px";
    }
  }}
`;

const TitleText = styled.Text`
  font-size: 26px;
  font-weight: 700'; 
`;

export { Text, TitleText };
