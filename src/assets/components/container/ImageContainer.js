import styled from "styled-components";

const ImageContainer = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 23px;
  border: 2px solid #ededed;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  align-content: flex-start;
`;

const ImageContainerImage = styled.Image`
  border-radius: 14px;
  max-height: 170px;
  resize-mode: cover;
  width: 100%;
`;

export { ImageContainer, ImageContainerImage };
