import styled from "styled-components";

const Square = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  max-height: ${({ unit }) => unit * 8}px;
  background-color: ${({ color }) => color};
  margin-left: ${({ unit }) => unit}px;
  margin-bottom: ${({ unit }) => unit * 2}px;
  white-space: nowrap;
`;

Square.defaultProps = {
  color: "#4DD4E0"
};

export default Square;
