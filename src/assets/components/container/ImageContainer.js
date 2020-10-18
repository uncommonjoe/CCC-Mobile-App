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
        return "margin-right: 15px; width: 300px"
    }
  }}
`;

const ImageContainerImage = styled.Image`
  border-radius: 14px;
  height: 170px;
  resize-mode: cover;
  width: 100%;
`;

export { ImageContainer, ImageContainerImage };
