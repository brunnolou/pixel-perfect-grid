import fibonacciArray from "./fibonacciArray";

// export const range = (n, times = 1, scale = 1) =>
//   Array(n)
//     .fill()
//     .map((_, i) => Math.round((i + 1) * times * scale ** i));

export const per = x => x * 100 + "%";
export const range = (n, times = 1, scale = 1) =>
  Array(n)
    .fill()
    .map((_, i) => Math.round(i * times * scale ** i));

export const isGood = x => x % 2 === 0 && x % 3 === 0 && x % 4 === 0;
export const fibScale = baseUnit => fibonacciArray.map(x => x * baseUnit);
