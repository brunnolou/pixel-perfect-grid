import React from "react";
import styled from "styled-components";
import BadNumber from "../BadNumber/BadNumber";

export const round = x => Math.round(x * 100) / 100;

const P = styled.p`
	padding: 12px 0;
`

const ColumnData = ({ width, division, margin, baseUnit }) => {
  const size = width / division - margin * 2;

  return (
    <BadNumber number={size} baseUnit={baseUnit} bg={'yellow'}>
      <P>
        1 / {division}
        <br />
        {round(size)}px
        <br />
      </P>
    </BadNumber>
  );
};

export default ColumnData;
