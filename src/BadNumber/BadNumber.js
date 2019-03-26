import styled from "styled-components";

const BadNumber = styled.div`
  opacity: ${({ number, baseUnit }) => (number % baseUnit !== 0 ? 0.2 : 1)};
  background-color: ${({ bg }) => bg};
`;

BadNumber.defaultProps = {
  baseUnit: 1
};

export default BadNumber;
