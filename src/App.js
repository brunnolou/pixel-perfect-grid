import React, { useState } from "react";

import "./App.css";
import Column from "./Column";
import ColumnData from "./ColumnData/ColumnData";
import Grid from "./Grid/Grid";
import Square from "./Square/Square";
import Pill from "./Pill";
import BadNumber from "./BadNumber/BadNumber";
import { fibScale, range, isGood, per } from "./utils";
import Container from "./Container/Container";
import IsGood from "./BadNumber/IsGood";

function App() {
  const [baseUnit, setBaseUnit] = useState(6);
  const spacingsLength = 32 * 8;
  const [containerUnit, setContainerUnit] = useState(39);
  const [containerMargin, setMargin] = useState(3);

  // const fibSpacings = fibScale(baseUnit, 1);
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
      <table className="table">
        <tbody>
          <tr>
            <th>Base unit: </th>
            <td>
              <input
                onChange={e => setBaseUnit(Number(e.target.value))}
                type="number"
                min="0"
                max="50"
                step="2"
                value={baseUnit}
              />
            </td>
          </tr>

          <tr>
            <th>Container: </th>
            <td>
              <IsGood number={containerUnit * baseUnit * baseUnit}>
                <input
                  onChange={e => setContainerUnit(Number(e.target.value))}
                  type="number"
                  min="0"
                  max={spacingsLength}
                  value={containerUnit}
                />
              </IsGood>
            </td>
            {/* <td>
              {!isGood(containerUnit * baseUnit * baseUnit) ? (
                <del>{containerUnit * baseUnit * baseUnit + gutter}</del>
              ) : (
                containerUnit * baseUnit * baseUnit + gutter
              )}
            </td> */}
          </tr>

          <tr>
            <th>Gutter</th>
            <td>
              <input
                onChange={e => setMargin(Number(e.target.value))}
                type="number"
                min="0"
                max={spacingsLength}
                value={containerMargin}
              />
            </td>
            <td>
              <Pill>{gutter}px</Pill>
            </td>
          </tr>
        </tbody>
      </table>

      {roundSpacing.map(w => (
        <Grid size={baseUnit} width={w + gutter * 2} height={"auto"}>
          <Container margin={margin} width={w + gutter * 2}>
            <div>
              <p>
                {w + gutter * 2}
                <small>px</small>
              </p>
              <small>With 2 gutters: {gutter * 2}px</small>
            </div>
          </Container>
          <Container margin={margin} width={w + gutter}>
            <center>
              <h1>{w + gutter}</h1>
              {!!gutter && (
                <small>
                  With half gutter on each side: 2 &times; {gutter / 2}px
                </small>
              )}
            </center>
          </Container>

          <h1>Containers size</h1>
          <div style={{ marginBottom: 12 }}>
            <Column margin={0} width={w + gutter * 2}>
              <BadNumber number={w + gutter * 2} bg={"#4DD4E0"}>
                {w + gutter * 2}
              </BadNumber>
            </Column>
          </div>

          <Column margin={margin} width={w + gutter}>
            <BadNumber number={w + gutter} bg={"#4DD4E0"}>
              {w + gutter}
            </BadNumber>
          </Column>

          {[[1, 1], [10, 12], [2, 3], [1, 2], [1, 3]].map(([x, div]) => {
            const columnWidth = (w + gutter) / div - gutter;
            const containerSize = x * columnWidth + (x - 1) * gutter;
            return (
              <Container margin={margin} width={w}>
                <Column margin={margin} width={containerSize}>
                  <BadNumber number={containerSize} bg={"#4DD4E0"}>
                    {containerSize}
                  </BadNumber>
                </Column>
              </Container>
            );
          })}

          <h1>Column widths</h1>
          {w > 1152 && (
            <Container margin={margin} width={w}>
              {[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12].map(x => (
                <Column margin={margin} width={per(1 / x)}>
                  <ColumnData
                    width={w + gutter}
                    division={x}
                    margin={margin}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
          )}

          {w > 540 && (
            <Container margin={margin} width={w}>
              {[6, 6, 6, 6, 6, 6].map(x => (
                <Column margin={margin} width={per(1 / x)}>
                  <ColumnData
                    width={w + gutter}
                    division={x}
                    margin={margin}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
          )}

          {w > 360 && (
            <Container margin={margin} width={w}>
              {[4, 4, 4, 4].map(x => (
                <Column margin={margin} width={per(1 / x)}>
                  <ColumnData
                    width={w + gutter}
                    division={x}
                    margin={margin}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
          )}

          {w > 324 && (
            <Container margin={margin} width={w}>
              {[3, 3, 3].map(x => (
                <Column margin={margin} width={per(1 / x)}>
                  <ColumnData
                    width={w + gutter}
                    division={x}
                    margin={margin}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
          )}

          <Container margin={margin} width={w}>
            {[2, 2].map(x => (
              <Column margin={margin} width={per(1 / x)}>
                <ColumnData
                  width={w + gutter}
                  division={x}
                  margin={margin}
                  baseUnit={baseUnit}
                />
              </Column>
            ))}
          </Container>

          <section>
            <h1>Layout</h1>
            <Container margin={margin} width={w}>
              {[[1, 6], [5, 6]].map(([x, by]) => (
                <Column margin={0} width={per(x / by)}>
                  <ColumnData
                    width={w + gutter}
                    division={[x, by]}
                    margin={0}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
            <Container margin={margin} width={w}>
              {[[1, 4], [3, 4]].map(([x, by]) => (
                <Column margin={0} width={per(x / by)}>
                  <ColumnData
                    width={w + gutter}
                    division={[x, by]}
                    margin={0}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
            <Container margin={margin} width={w}>
              {[[1, 3], [2, 3]].map(([x, by]) => (
                <Column margin={0} width={per(x / by)}>
                  <ColumnData
                    width={w + gutter}
                    division={[x, by]}
                    margin={0}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
            <Container margin={margin} width={w}>
              {[[1, 2], [1, 2]].map(([x, by]) => (
                <Column margin={0} width={per(x / by)}>
                  <ColumnData
                    width={w + gutter}
                    division={[x, by]}
                    margin={0}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
            <Container margin={margin} width={w}>
              {[[1, 3], [1, 3], [1, 3]].map(([x, by]) => (
                <Column margin={0} width={per(x / by)}>
                  <ColumnData
                    width={w + gutter}
                    division={[x, by]}
                    margin={0}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
            <Container margin={margin} width={w}>
              {[[1, 4], [2, 4], [1, 4]].map(([x, by]) => (
                <Column margin={0} width={per(x / by)}>
                  <ColumnData
                    width={w + gutter}
                    division={[x, by]}
                    margin={0}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
            <Container margin={margin} width={w}>
              {[[1, 6], [4, 6], [1, 6]].map(([x, by]) => (
                <Column margin={0} width={per(x / by)}>
                  <ColumnData
                    width={w + gutter}
                    division={[x, by]}
                    margin={0}
                    baseUnit={baseUnit}
                  />
                </Column>
              ))}
            </Container>
          </section>

          <h1>Spacing</h1>

          <Square size={baseUnit / 2} unit={baseUnit} title={w}>
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
