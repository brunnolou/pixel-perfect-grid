import React, { useState } from "react";
import Column from "../Column";
import { Stack, Inline, Box } from "../utils/Flex";
import fibonacciArray from "../fibonacciArray";

const isGood = x => x % 2 === 0 && x % 3 === 0 && x % 4 === 0;
const isInt = x => Number.isInteger(x);

export default function UnitPill({
  spacingsPlusWidth,
  margin,
  w,
  children,
  ...props
}) {
  const [width, setWidth] = useState(w);
  // const [margin, setMargin] = useState(1);

  const widthPx = spacingsPlusWidth[width];
  const m = spacingsPlusWidth[1];
  const shift = m - m * margin;

  return (
    <Box mx={(m / 2) * margin} width={widthPx + shift}>
      <Box bg="tomato" py={1} my={1}>
        <Inline width={1}>
          <button onClick={() => setWidth(Math.max(0, width - 1))}>-</button>

          <Box flex={1}>
            {fibonacciArray[width]} |
            <small
              style={{
                opacity: isGood(widthPx + shift)
                  ? 1
                  : isInt(widthPx + shift)
                  ? 0.5
                  : 0.2
              }}
            >
              {widthPx + shift}
            </small>
          </Box>

          <button onClick={() => setWidth(width + 1)}>+</button>
        </Inline>
      </Box>
    </Box>
  );
}
