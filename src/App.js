import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import Column from "./Column";
import Pill from "./Pill";
import ColumnData from "./ColumnData/ColumnData";
import Grid from "./Grid/Grid";
import fibonacciArray from "./fibonacciArray";
import Square from "./Square/Square";
import BadNumber from "./BadNumber/BadNumber";

const per = x => x * 100 + "%";
const range = (n, times = 1, scale = 1) =>
  Array(n)
    .fill()
    .map((_, i) => Math.round(i * times * scale ** i));

const isGood = x => x % 2 === 0 && x % 3 === 0 && x % 4 === 0;
const fibScale = baseUnit => fibonacciArray.map(x => x * baseUnit);

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerStyled = styled.div`
  background: rgba(100, 100, 100, 0.1);
`;

function Container({ margin, width, children }) {
  return (
    <ContainerStyled
      style={{
        position: "relative",
        margin: margin + "px auto",
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

function App() {
  const [baseUnit, setBaseUnit] = useState(6);
  const spacingsLength = 32 * 8;
  const [containerUnit, setContainerUnit] = useState(37);
  const [containerMargin, setMargin] = useState(3);

  const fibSpacings = fibScale(baseUnit, 1);
  const spacings = range(spacingsLength, baseUnit, 1);
  const expo = range(spacingsLength, 1, 1.09);

  const roundSpacing = spacings
    .map((_, i) => baseUnit * spacings[i + containerUnit])
    .filter(isGood)
    .slice(0, 1)
    .reverse();

  const margin = spacings[containerMargin];
  const gutter = margin * 2;

  return (
    <div className="App">
      {/* <div style={{ overflowX: "auto" }}>
        <table>
          <tbody>
            <tr>
              <th>Index</th>
              {spacings.map((space, i) => (
                <td>
                  <small width={space} title={i}>
                    {i}
                  </small>
                </td>
              ))}
            </tr>
            <tr>
              <th>Space</th>
              {spacings.map((space, i) => (
                <td>
                  <Pill width={space} title={i}>
                    {space}
                  </Pill>
                </td>
              ))}
            </tr>
            <tr>
              <th>&times;BaseUnit</th>

              {spacings.map((space, i) => (
                <td>
                  <Pill width={space * baseUnit} title={i}>
                    {space * baseUnit}
                  </Pill>
                </td>
              ))}
            </tr>
            <tr>
              <th>Major</th>

              {expo.map((space, i) => (
                <td>
                  <Pill width={spacings[space]} title={i}>
                    {spacings[space]}
                  </Pill>
                </td>
              ))}
            </tr>
            <tr>
              <th>Fibonacci</th>
              {fibSpacings.map((space, i) => (
                <td>
                  <Pill width={space} title={i}>
                    {space}
                  </Pill>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div> */}

      <p>
        <b>Base unit: </b>
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
        <b>Container width: </b>
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
        <b>Margin</b> {containerMargin}
        <input
          onChange={e => setMargin(Number(e.target.value))}
          type="range"
          min="0"
          max={spacingsLength}
          value={containerMargin}
        />
        {margin}
      </p>

      <p>
        <b>Gutter: </b>
        {gutter}
      </p>

      {roundSpacing.map(i => (
        <Grid size={baseUnit} width={i + gutter * 2} height={"auto"}>
          <Container margin={margin} width={i + gutter * 2}>
            <div>
              <h1>
                {i + gutter * 2}
                <small>px</small>
              </h1>
              <small>With 2 gutters: {gutter * 2}px</small>
            </div>
          </Container>

          <Container margin={margin} width={i + gutter}>
            <center>
              <p>
                {i + gutter} + <small>margin: {gutter}</small>
              </p>
              <small>With half gutter: {gutter * 2}px</small>
            </center>
          </Container>

          <h1>Containers size</h1>
          {[[1, 1], [10, 12], [2, 3], [1, 2], [1, 3]].map(([x, div]) => {
            const columnWidth = (i + gutter) / div - gutter;
            const containerSize = x * columnWidth + (x - 1) * gutter;
            return (
              <Container margin={margin} width={i}>
                <Column margin={margin} width={containerSize}>
                  <BadNumber number={containerSize} bg={"yellow"}>
                    {containerSize}
                  </BadNumber>
                </Column>
              </Container>
            );
          })}

          <h1>Column widths</h1>
          {i > 1152 && (
            <Container margin={margin} width={i}>
              {[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12].map(x => (
                <Column margin={margin} width={per(1 / x)}>
                  <ColumnData
                    width={i + gutter}
                    division={x}
                    margin={margin}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
          )}

          {i > 540 && (
            <Container margin={margin} width={i}>
              {[6, 6, 6, 6, 6, 6].map(x => (
                <Column margin={margin} width={per(1 / x)}>
                  <ColumnData
                    width={i + gutter}
                    division={x}
                    margin={margin}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
          )}

          {i > 360 && (
            <Container margin={margin} width={i}>
              {[4, 4, 4, 4].map(x => (
                <Column margin={margin} width={per(1 / x)}>
                  <ColumnData
                    width={i + gutter}
                    division={x}
                    margin={margin}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
          )}

          {i > 324 && (
            <Container margin={margin} width={i}>
              {[3, 3, 3].map(x => (
                <Column margin={margin} width={per(1 / x)}>
                  <ColumnData
                    width={i + gutter}
                    division={x}
                    margin={margin}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
          )}

          <Container margin={margin} width={i}>
            {[2, 2].map(x => (
              <Column margin={margin} width={per(1 / x)}>
                <ColumnData
                  width={i + gutter}
                  division={x}
                  margin={margin}
                  baseUnit={baseUnit}
                />
              </Column>
            ))}
          </Container>

          <h1>Spacing</h1>

          <Square size={baseUnit / 2} unit={baseUnit} title={i}>
            {1} - <small>{baseUnit / 2}px</small>
          </Square>

          {spacings.slice(0, 8).map(
            (space, i) =>
              !!i && (
                <Square size={space} unit={baseUnit} title={i}>
                  {i + 1} - <small>{space}px</small>
                </Square>
              )
          )}

          {/* {[[1, 1], [10, 12], [2, 3], [1, 2], [1, 3], [1, 6], [1, 12]]
            .reverse()
            .map(([x, div], index) => {
              const columnWidth = (i + gutter) / div - gutter;
              const containerSize = x * columnWidth + (x - 1) * gutter;
              return (
                <>
                  <Square size={containerSize} unit={baseUnit} title={index}>
                    {index + 7} - <small>{containerSize}px</small>
                  </Square>
                </>
              );
            })} */}

          {expo.slice(5).map(
            (space, i) =>
              !!i &&
              !!spacings[space] && (
                <Square size={spacings[space]} unit={baseUnit} title={i}>
                  {i + 8} - <small>{spacings[space]}px</small>
                </Square>
              )
          )}
        </Grid>
      ))}
    </div>
  );
}

export default App;
