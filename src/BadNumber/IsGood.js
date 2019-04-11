import styled from "styled-components";
import { isGood } from "../utils";

const IsGood = styled.div`
  opacity: ${({ number }) => (!isGood(number) ? 0.5 : 1)};
  background-color: ${({ bg }) => bg};
`;

IsGood.defaultProps = {
  baseUnit: 1
};

export default IsGood;
