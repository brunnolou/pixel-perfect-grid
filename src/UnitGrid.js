import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import Column from "./Column";
import Pill from "./Pill";

const range = (n, times = 1, scale = 1) =>
  Array(n)
    .fill()
    .map((_, i) => Math.round((i + 1) * times * scale ** i));

const per = x => x * 100 + "%";
const isGood = x => x % 2 === 0 && x % 3 === 0 && x % 4 === 0;


const ContainerStyled = styled.div`
  display: flex;
  border: 1px solid #eee;
  /* background: rgba(100, 100, 100, 0.5); */

  & > *:last-child {
    margin-right: 0 !important;
  }
`;

function Container({ margin, width, children }) {
  return (
    <ContainerStyled
      style={{
        margin: margin + "px auto",
        width: "100%",
        maxWidth: width
      }}
    >
      {children ? children : width}
    </ContainerStyled>
  );
}

function UnitGrid() {
  const [baseUnit, setBaseUnit] = useState(8);
  const [spacingsLength] = useState(24 * 4);
  const [containerUnit, setContainerUnit] = useState(0);
  const [containerMargin, setMargin] = useState(0);

  // const spacings = fibScale(baseUnit, 1);
  const spacings = range(spacingsLength, baseUnit, 1);

  const roundSpacing = spacings
    .map((_, i) => baseUnit * spacings[i + containerUnit])
    .filter(isGood)
    .slice(0, 6)
    .reverse();

  const margin = spacings[containerMargin];

  return (
    <div className="App">
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
            <tr>
              {spacings.map((space, i) => (
                <td>
                  <Pill width={space * baseUnit} title={i}>
                    {space * baseUnit}
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
          onChange={e => setBaseUnit(Number(e.target.value))}
          type="range"
          min="0"
          max="50"
          step="2"
          value={baseUnit}
        />
        {baseUnit}
      </p>

      <p>
        Container width:{" "}
        <input
          onChange={e => setContainerUnit(Number(e.target.value))}
          type="range"
          min="0"
          max={spacingsLength}
          value={containerUnit}
        />
        {containerUnit}
      </p>

      <p>
        Margin {containerMargin}
        <input
          onChange={e => setMargin(Number(e.target.value))}
          type="range"
          min="0"
          max={spacingsLength}
          value={containerMargin}
        />
        {margin}
      </p>

      {roundSpacing.map(i => (
        <>
          <Container margin={margin} width={i + margin * 4} />
          <Container margin={margin} width={i + margin * 2} />
          <Container margin={margin} width={i} />

          <Container margin={margin} width={i}>
            {[4, 4, 4, 4].map(x => (
              <Column margin={margin} width={per(1 / x)}>
                1 / {x}
              </Column>
            ))}
          </Container>

          <Container margin={margin} width={i}>
            {[3, 3, 3].map(x => (
              <Column margin={margin} width={per(1 / x)}>
                1 / {x}
              </Column>
            ))}
          </Container>

          <Container margin={margin} width={i}>
            {[2, 2].map(x => (
              <Column margin={margin} width={per(1 / x)}>
                1 / {x}
              </Column>
            ))}
          </Container>
        </>
      ))}
    </div>
  );
}

export default UnitGrid;
