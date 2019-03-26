import React from "react";
export default function Pill({ width, children, ...props }) {
  return (
    <span
      {...props}
      style={{
        border: "1px solid #eee",
        padding: 4,
        // opacity: isGood(width) ? 1 : 0.2
      }}
    >
      {children}
    </span>
  );
}
