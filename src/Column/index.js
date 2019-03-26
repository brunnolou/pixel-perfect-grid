import React from "react";


export default function Column({ padding = ``, margin, width, children }) {
  return (
    <div
      style={{
        width,
        padding,
        marginLeft: margin,
        marginRight: margin,
        // background: "rgba(255, 255, 0, 1)"
      }}
    >
      {children}
    </div>
  );
}
