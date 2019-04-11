import React from "react";
import styled from "styled-components";
import { isGood } from "../utils";

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerStyled = styled.div`
  background: rgba(100, 100, 100, 0.1);
`;

export default function Container({ margin, width, children }) {
  return (
    <ContainerStyled
      style={{
        position: "relative",
        margin: "12px auto",
        width: "100%",
        maxWidth: width
      }}
    >
      <Flex
        style={{
          marginLeft: margin * -1,
          marginRight: margin * -1
        }}
      >
        {children ? (
          children
        ) : (
          <small
            style={{
              opacity: isGood(width) ? 1 : Number.isInteger(width) ? 0.5 : 0.2
            }}
          >
            {width}
          </small>
        )}
      </Flex>
    </ContainerStyled>
  );
}
