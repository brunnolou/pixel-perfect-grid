import React, { useState } from "react";
import styled from "styled-components";

import "./style.css";
import fibonacciArray from "../fibonacciArray";
import { range } from "../utils";
import Pill from "../Pill";
import UnitPill from "../UnitPill";
import Flex, { Box } from "../utils/Flex";

const fibScale = baseUnit => fibonacciArray.map(x => x * baseUnit);
const per = x => x * 100 + "%";

const ContainerStyled = styled.div`
  display: flex;
  border: 1px solid #eee;
  /* background: rgba(100, 100, 100, 0.5); */

  & > *:last-child {
    margin-right: 0 !important;
  }
`;

const H1 = styled.div`
	background: aliceblue;
	max-width: 1920px;
	margin: 0 auto;
`

function FibonacciGrid() {
  const [baseUnit, setBaseUnit] = useState(140);
  const [spacingsLength] = useState(24 * 4);
  const [containerUnit, setContainerUnit] = useState(0);
  const [containerMargin, setMargin] = useState(0.25);

  const spacings = fibScale(baseUnit, 1);

  const spacingsPlusWidth = spacings.map((_, i) => spacings[i + containerUnit]);

  // const margin = spacings[containerMargin];

  return (
    <div className="FibonacciGrid">
      <div style={{ overflowX: "auto" }}>
        <table>
          <tbody>
            <tr>
              {spacings.map((space, i) => (
                <td>
                  <small width={space} title={i}>
                    {i}
                  </small>
                </td>
              ))}
            </tr>
            <tr>
              {spacings.map((space, i) => (
                <td>
                  <Pill width={space} title={i}>
                    {space}
                  </Pill>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Base unit:{" "}
        <input
          onChange={e => setBaseUnit(parseFloat(e.target.value, 10))}
          type="range"
          min="0"
          max="300"
          // step="2"
          value={baseUnit}
        />
        {baseUnit}
      </p>
      {/* <p>
        Container width:{" "}
        <input
          onChange={e => setContainerUnit(parseFloat(e.target.value,10))}
          type="range"
          min="-5"
          max={spacingsLength}
          value={containerUnit}
        />
        {containerUnit}
      </p> */}
      <p>
        Margin
        <input
          onChange={e => setMargin(parseFloat(e.target.value, 10))}
          type="range"
          min="0"
          step={1 / 32}
          max={1}
          value={containerMargin}
        />
        {containerMargin}
      </p>

      <h1>Containers</h1>

      <Flex width={1} mx="auto" justifyContent="center">
        <UnitPill w={6} {...{ spacingsPlusWidth, margin: containerMargin }} />
      </Flex>

      <Flex width={1} mx="auto" justifyContent="center">
        <UnitPill w={5} {...{ spacingsPlusWidth, margin: containerMargin }} />
      </Flex>

      <Flex width={1} mx="auto" justifyContent="center">
        <UnitPill w={4} {...{ spacingsPlusWidth, margin: containerMargin }} />
      </Flex>

      <br />
      <br />
      <br />

      <h1>Equal divisions</h1>

      <Flex width={1} mx="auto" justifyContent="center">
        <UnitPill w={4} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={4} {...{ spacingsPlusWidth, margin: containerMargin }} />
      </Flex>

      <Flex width={1} mx="auto" justifyContent="center">
        <UnitPill w={3} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={3} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={3} {...{ spacingsPlusWidth, margin: containerMargin }} />
      </Flex>

      <Flex width={1} mx="auto" justifyContent="center">
        <UnitPill w={2} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={2} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={2} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={2} {...{ spacingsPlusWidth, margin: containerMargin }} />
      </Flex>

      <Flex width={1} mx="auto" justifyContent="center">
        <UnitPill w={1} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={1} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={1} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={1} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={1} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={1} {...{ spacingsPlusWidth, margin: containerMargin }} />
      </Flex>

      <br />
      <br />
      <br />

      <H1>Layouts</H1>

      <h2>2</h2>
      <Flex width={1} mx="auto" justifyContent="center">
        <UnitPill w={4} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={2} {...{ spacingsPlusWidth, margin: containerMargin }} />
      </Flex>

      <Flex width={1} mx="auto" justifyContent="center">
        <UnitPill w={2} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={4} {...{ spacingsPlusWidth, margin: containerMargin }} />
      </Flex>

      <h2>3</h2>
      <Flex width={1} mx="auto" justifyContent="center">
        <UnitPill w={1} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={3} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={2} {...{ spacingsPlusWidth, margin: containerMargin }} />
      </Flex>

      <Flex width={1} mx="auto" justifyContent="center">
        <UnitPill w={2} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={3} {...{ spacingsPlusWidth, margin: containerMargin }} />
        <UnitPill w={1} {...{ spacingsPlusWidth, margin: containerMargin }} />
      </Flex>
    </div>
  );
}

export default FibonacciGrid;
