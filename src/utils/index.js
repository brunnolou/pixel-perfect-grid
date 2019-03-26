export const range = (n, times = 1, scale = 1) =>
  Array(n)
    .fill()
    .map((_, i) => Math.round((i + 1) * times * scale ** i));
