import { useState } from "react";
import ChessPiece from "./ChessPiece";
import Square from "./Square";
import "./Chessboard.css";
import MoveHistory from "./MoveHistory";

function Chessboard() {
  const [moveHistory, setMoveHistory] = useState([]);

  const [rows, setRows] = useState([
    ["Bishop", "none", "none", "none"],
    ["none", "Queen", "none", "none"],
    ["none", "none", "none", "none"],
    ["none", "none", "Queen", "none"],
  ]);

  const [cornerColor, setCornerColor] = useState("white");
  const [board, setBoard] = useState([[]]);
  const [hidden, setHidden] = useState(false);

  function handleClick(row, col) {
    console.log(`Square ${row},${col} clicked!`);
  }

  function handleReverseRows() {
    setCornerColor(cornerColor === "white" ? "black" : "white");
    setRows(swapRows(rows));
    setBoard(buildB());
    setMoveHistory([...moveHistory, "Reversed Rows"]);
  }

  function handleReverseColumns() {
    setCornerColor(cornerColor === "white" ? "black" : "white");
    setRows(reverseColumns(rows));
    setBoard(buildB());
    setMoveHistory([...moveHistory, "Reversed Columns"]);
  }

  function handleAddPiece() {
    let val = addPiece(rows, "Queen");
    val != false ? setRows(val) : (val = "ERROR");
    setBoard(buildB());
  }

  function addPiece(rows, value) {
    let arr = [];
    arr = rows;
    // Create an array to store empty indices
    const emptyIndices = [];

    // Loop through each row and column to find empty indices
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === "none") {
          emptyIndices.push([i, j]); // Add empty index to array
        }
      }
    }

    // If there are no empty indices, return false
    if (emptyIndices.length === 0) {
      return false;
    }

    // Select a random empty index and set it to the given value
    const [randRow, randCol] =
      emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    arr[randRow][randCol] = value;

    return arr;
  }

  function handleHideBoard() {
    setHidden(true);
  }

  function handleShowBoard() {
    setHidden(false);
  }

  function reverseColumns(rows) {
    return rows.map((row) => row.reverse());
  }

  function swapRows(rows) {
    return rows.reverse();
  }

  function buildB() {
    const squares = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const squareColor = 
          cornerColor === "white" ? (i + j) % 2 === 0 ? "white" : "grey"
            : (i + j + 1) % 2 === 0 ? "grey" : "white";
        const piece = rows[j][i];
        squares.push(
          <Square
            piece={piece}
            color={squareColor}
            key={`${i},${j}`}
            index={`${i},${j}`}
            onClick={() => handleClick(i, j)}
          />
        );
      }
    }
    return squares;
  }

  return (
    <>
      <div className="sideBySide">
        <div className="chessBoardContainer">
          {hidden ? (
            <div className="hiddenBoard" />
          ) : (
            <div className="chessboard">{board}</div>
          )}
        </div>

        <MoveHistory moveHistory={moveHistory} />
      </div>

      <div className="bottom-container">
        <button onClick={handleReverseRows} className="button">
          Reverse Rows
        </button>
        <button onClick={handleReverseColumns} className="button">
          Reverse Columns
        </button>
        {hidden ? (
          <button onClick={handleShowBoard} className="button">
            Show Board
          </button>
        ) : (
          <button onClick={handleHideBoard} className="button">
            Hide Board
          </button>
        )}
        <button onClick={handleAddPiece} className="button">
          Add Piece
        </button>
        <button onClick={handleReverseColumns} className="button">
          Flip Board
        </button>
        <div />
      </div>
    </>
  );
}

export default Chessboard;
