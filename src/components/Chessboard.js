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
  
  const [cornerColor, setCornerColor] = useState("White");
  const [board, setBoard] = useState([[]]);

  function handleClick(row, col) {
    console.log(`Square ${row},${col} clicked!`);
  }

  function handleReverseRows() {
    setRows(swapRows(rows));
    setBoard(buildB());
    setMoveHistory([...moveHistory, "Reversed Rows"]);
  }


  function handleReverseColumns() {
    setRows(reverseColumns(rows));
    setBoard(buildB());
    setMoveHistory([...moveHistory, "Reversed Columns"]);
  }

  function reverseColumns(rows){
    setCornerColor(cornerColor == "white" ? "black" : "white");
    return rows.map(row => row.reverse());
  }

  function swapRows(rows){
    setCornerColor(cornerColor == "white" ? "black" : "white");
    return rows.reverse();
  }

  function buildB() {
    const squares = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const squareColor = cornerColor === "white" ? ((i + j) % 2 === 0 ? "white" : "grey") : ((i + j + 1) % 2 === 0 ? "white" : "grey") ;
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
        <div className="chessboard">{board}</div>
      </div>
      
      <MoveHistory moveHistory={moveHistory}/>
    </div>
    
    <div className="bottom-container"> 
        <button onClick={handleReverseRows} className = 'button'>Reverse Rows</button>
        <button onClick={handleReverseColumns} className = 'button'>Reverse Columns</button>
    <div/>
      </div>
    </>
  );
}

export default Chessboard;
