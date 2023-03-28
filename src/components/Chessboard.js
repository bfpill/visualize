import { useState, useEffect } from "react";
import Square from "./Square";
import "./Chessboard.css";
import MoveHistory from "./MoveHistory";

function Chessboard() {
  const [moveHistory, setMoveHistory] = useState([]);

  const emptyArr = [
    ["none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none"],
  ];

  const [rows, setRows] = useState(emptyArr);

  const [cornerColor, setCornerColor] = useState("white");
  const [board, setBoard] = useState([[]]);
 // empty dependency array means this effect runs only once on first render

  const [hidden, setHidden] = useState(false);
  

  const pieces = ["Pawn", "Rook", "Knight", "Bishop", "Queen"];

  useEffect(() => {
    // Call buildB function on the first render
    setBoard(buildB(5, rows));
  }, []);

  useEffect(() => {
    handleResetBoard();
  }, []);

  function handleClick(row, col) {
    console.log(`Square ${row},${col} clicked!`);
  }

  function handleReverseRows() {
    setCornerColor(cornerColor === "white" ? "black" : "white");
    setRows(swapRows(rows));
    setBoard(buildB(5, rows));
    setMoveHistory([...moveHistory, "Reversed Rows"]);
  }

  function handleReverseColumns() {
    setCornerColor(cornerColor === "white" ? "black" : "white");
    setRows(reverseColumns(rows));
    setBoard(buildB(5, rows));
    setMoveHistory([...moveHistory, "Reversed Columns"]);
  }

  function handleAddPiece() {
    //Select a random index from Pieces[]
    const piece = pieces[Math.floor(Math.random() * pieces.length)];
    let val = addPiece(rows, piece);
    val != false ? setRows(val[0]) : (val = "ERROR");
    setBoard(buildB(5, rows));
    let str = "Added a " + piece + " on " + val[1];
    setMoveHistory([...moveHistory, str]);
  }

  function addPiece(rows, piece) {
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
    arr[randRow][randCol] = piece;

    return [arr, [(randCol + 1) , (arr.length - randRow )]];
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

  function buildB(size, arr) {
    const squares = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const squareColor = 
          cornerColor === "white" ? (i + j) % 2 === 0 ? "white" : "grey"
            : (i + j + 1) % 2 === 0 ? "grey" : "white";
        const piece = arr[i][j];
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

  function handleResetBoard(){
    setRows(emptyArr);
    setMoveHistory([]);
    
    setBoard(buildB(5, emptyArr));
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
        <button onClick={handleResetBoard} className="button">
          Reset Board
        </button>
        <div />
      </div>
    </>
  );
}

export default Chessboard;
