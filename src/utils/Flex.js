import styled from "styled-components";
import { width, flex, space, color, justifyContent } from "styled-system";

export const Box = styled.div`
  ${space}
  ${color}
  ${width}
	${flex}
	${justifyContent}
`;

export const Flex = styled(Box)`
  display: flex;
`;

export const Stack = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Inline = styled(Box)`
  display: flex;
`;

export default Flex;
