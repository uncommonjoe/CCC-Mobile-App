import styled from "styled-components/native";

const Header = styled.View`
  background-color: white;
  padding: 70px 20px 25px 20px;
  align-self: stretch;
  align-items: center;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);
  height: 120px;

  ${({ hasBack }) => {
	switch (true) {
	  case hasBack:
	    return "flex-direction: row;justify-content: space-between;"
	}
    }}
`;

const HeaderTitle = styled.Text`
  flex-direction: row;
  align-items: center;
  color: rgba(26, 27, 29, 1);
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;

const HeaderBackButton = styled.Button`

`;

export { Header, HeaderTitle, HeaderBackButton };

// margin: -25px -25px 25px -25px;