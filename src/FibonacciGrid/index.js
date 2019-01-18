import React, { useState } from "react";
import styled from "styled-components";

import "./style.css";
import fibonacciArray from "./fibonacciArray";

const fibScale = baseUnit => fibonacciArray.map(x => x * baseUnit);

const range = (n, times = 1, scale = 1) =>
  Array(n)
    .fill()
    .map((_, i) => Math.round((i + 1) * times * scale ** i));

const per = x => x * 100 + "%";
const isGood = x => x % 2 === 0 && x % 3 === 0 && x % 4 === 0;

function Pill({ width, children, ...props }) {
  return (
    <span
      {...props}
      style={{
        border: "1px solid #eee",
        padding: 4,
        opacity: isGood(width) ? 1 : 0.2
      }}
    >
      {children}
    </span>
  );
}

function Column({ margin, baseUnit, spacings, width, children }) {
  return (
    <div
      style={{
        width: width,
        padding: `8px 0`,
        marginRight: margin,
        background: "rgba(255, 255, 0, 0.5)"
        // borderLeft: "1px solid #eee",
        // borderRight: "1px solid #eee"
      }}
    >
      {children ? children : width}
    </div>
  );
}

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

function FibonacciGrid() {
  const [baseUnit, setBaseUnit] = useState(8);
  const [spacingsLength] = useState(24 * 4);
  const [containerUnit, setContainerUnit] = useState(6);
  const [containerMargin, setMargin] = useState(2);

  const spacings = fibScale(baseUnit, 1);
  // const spacings = range(spacingsLength, baseUnit, 1);

  const roundSpacing = spacings
    .map((_, i) => spacings[i + containerUnit])
    // .filter(isGood)
    .slice(0, 6)
    // .filter(x => x > 280 && x < 3000)
    .reverse();

  const margin = spacings[containerMargin];

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
          onChange={e => setBaseUnit(Number(e.target.value))}
          type="range"
          min="0"
          max="50"
          // step="2"
          value={baseUnit}
        />
        {baseUnit}
      </p>
      <p>
        Container width:{" "}
        <input
          onChange={e => setContainerUnit(Number(e.target.value))}
          type="range"
          min="-5"
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

      {roundSpacing.map((w, i) => (
        <>
          <Container margin={0} width={w + margin * 2} />
          <Container margin={0} width={w} />

          <Container margin={margin} width={w}>
            {range(4).map(() => (
              <Column margin={margin} width={per(1 / 4)}>
                1 / {4}
              </Column>
            ))}
          </Container>
          <Container margin={margin} width={w}>
            {range(3).map(() => (
              <Column margin={margin} width={per(1 / 3)}>
                1 / {3}
              </Column>
            ))}
          </Container>
          <Container margin={margin} width={w}>
            {range(2).map(() => (
              <Column margin={margin} width={per(1 / 2)}>
                1 / {2}
              </Column>
            ))}
          </Container>
        </>
      ))}

      {/*
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
      ))} */}
    </div>
  );
}

export default FibonacciGrid;
