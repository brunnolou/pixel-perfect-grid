import styled from "styled-components";

const BadNumber = styled.div`
  opacity: ${({ number, baseUnit }) => (number % baseUnit !== 0 ? 0.5 : 1)};
	background-color: ${({ bg }) => bg};
	/* background-image: linear-gradient(to right, rgba(0,0,0,.1) 0%, transparent 25%, transparent 75%, rgba(0,0,0,.1) 100%); */
	box-shadow: 1px 0px 0px rgba(255,255,255,.8) inset;
`;

BadNumber.defaultProps = {
  baseUnit: 1
};

export default BadNumber;
