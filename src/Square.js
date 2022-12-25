import { useState } from "react";

const boxStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

export default function Square(props) {
  const { onClick, value, currentPlayer, id } = props;

  return (
    <div
      className="square"
      style={boxStyle}
      onClick={() => onClick(id, currentPlayer)}
    >
      {value}
    </div>
  );
}
