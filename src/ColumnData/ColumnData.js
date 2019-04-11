import React from "react";
import styled from "styled-components";
import BadNumber from "../BadNumber/BadNumber";

export const round = x => Math.round(x * 100) / 100;

const P = styled.p`
  padding: 12px 0;
`;

const ColumnData = ({ width, division, margin, baseUnit }) => {
  let size = 0;
  const isArr = Array.isArray(division);

  if (isArr) {
		size = width * division[0] / division[1] - margin * 2;
  } else {
    size = width / division - margin * 2;
  }

  return (
    <BadNumber number={size} baseUnit={baseUnit} bg={"#4DD4E0"}>
      <P>
        {isArr ? division[0] + "/" + division[1] : '1 /' + division}
        <br />
        {round(size)}px
        <br />
      </P>
    </BadNumber>
  );
};

export default ColumnData;
