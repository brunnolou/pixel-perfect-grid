import React from "react";

export default function Column({
  padding = ``,
  margin,
  width,
  style,
  ...props
}) {
  return (
    <div
      style={{
        width,
        padding,
        marginLeft: margin,
        marginRight: margin,
        ...style
      }}
      {...props}
    />
  );
}
