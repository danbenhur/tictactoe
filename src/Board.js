import { useEffect, useState } from "react";
import Square from "./Square";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const rowStyle = {
  display: "flex",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const messageStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

export default function Board() {
  const [boardState, setBoardState] = useState({
    s1: undefined,
    s2: undefined,
    s3: undefined,
    s4: undefined,
    s5: undefined,
    s6: undefined,
    s7: undefined,
    s8: undefined,
    s9: undefined,
  });

  const [winner, setWinner] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("X");
  if (
    (boardState.s1 === boardState.s2 &&
      boardState.s1 === boardState.s3 &&
      boardState.s1 !== undefined) ||
    (boardState.s4 === boardState.s5 &&
      boardState.s4 === boardState.s6 &&
      boardState.s4 !== undefined) ||
    (boardState.s7 === boardState.s8 &&
      boardState.s7 === boardState.s9 &&
      boardState.s7 !== undefined) ||
    (boardState.s1 === boardState.s4 &&
      boardState.s1 === boardState.s7 &&
      boardState.s1 !== undefined) ||
    (boardState.s2 === boardState.s5 &&
      boardState.s2 === boardState.s8 &&
      boardState.s2 !== undefined) ||
    (boardState.s3 === boardState.s6 &&
      boardState.s3 === boardState.s9 &&
      boardState.s3 !== undefined) ||
    (boardState.s1 === boardState.s5 &&
      boardState.s1 === boardState.s9 &&
      boardState.s1 !== undefined) ||
    (boardState.s3 === boardState.s5 &&
      boardState.s3 === boardState.s7 &&
      boardState.s3 !== undefined)
  ) {
    setBoardState({});
    currentPlayer === "X" ? setWinner("O") : setWinner("X");
  }

  const handleClick = (clickedSquare, xOrO) => {
    xOrO === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");

    setBoardState((prevBoardState) => {
      return { ...prevBoardState, [clickedSquare]: xOrO };
    });
  };

  const handleReset = () => {
    setBoardState({});
    setWinner("");
    setCurrentPlayer("X");
  };

  return (
    <div style={containerStyle} className="tttBoard">
      <div id="statusArea" className="status" style={messageStyle}>
        Current player: <span>{currentPlayer}</span>
      </div>
      <div id="winnerArea" className="winner" style={messageStyle}>
        Winner: <span>{winner}</span>
      </div>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square
            onClick={handleClick}
            value={boardState.s1}
            currentPlayer={currentPlayer}
            id={"s1"}
          />
          <Square
            onClick={handleClick}
            value={boardState.s2}
            currentPlayer={currentPlayer}
            id={"s2"}
          />
          <Square
            onClick={handleClick}
            value={boardState.s3}
            currentPlayer={currentPlayer}
            id={"s3"}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            onClick={handleClick}
            value={boardState.s4}
            currentPlayer={currentPlayer}
            id={"s4"}
          />
          <Square
            onClick={handleClick}
            value={boardState.s5}
            currentPlayer={currentPlayer}
            id={"s5"}
          />
          <Square
            onClick={handleClick}
            value={boardState.s6}
            currentPlayer={currentPlayer}
            id={"s6"}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            onClick={handleClick}
            value={boardState.s7}
            currentPlayer={currentPlayer}
            id={"s7"}
          />
          <Square
            onClick={handleClick}
            value={boardState.s8}
            currentPlayer={currentPlayer}
            id={"s8"}
          />
          <Square
            onClick={handleClick}
            value={boardState.s9}
            currentPlayer={currentPlayer}
            id={"s9"}
          />
        </div>
      </div>
      <button onClick={handleReset} style={buttonStyle}>
        Reset
      </button>
    </div>
  );
}
