import styled from "styled-components";

const Grid = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: 0 auto;
  background-size: ${({ size }) => size}px ${({ size }) => size}px;
  background-image: linear-gradient(
    to right,
    ${({ color }) => color} 1px,
    transparent 1px
  );
  box-shadow: 1px 0 0 ${({ color }) => color};
`;

Grid.defaultProps = {
  color: "rgba(0, 0, 0, 0.05)"
};

export default Grid;
