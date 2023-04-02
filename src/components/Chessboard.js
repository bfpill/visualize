import { useState, useEffect } from "react";
import Square from "./Square";
import "./Chessboard.css";
import addPieceSound from '../sounds/move-self.mp3'
import click from '../sounds/click.wav'
import MoveHistory from "./MoveHistory";
import { render } from "@testing-library/react";

function Chessboard() {
  const [moveHistory, setMoveHistory] = useState([]);

  const emptyArr = [
    ["none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none"],
    ["none", "none", "none", "none", "none"],
  ];

  const [greenSquares, setGreenSquares] = useState(emptyArr);
  const [rows, setRows] = useState(emptyArr);
  const [squares, setSquares] = useState(emptyArr);
  const [board, setBoard] = useState([[]]);

  const [addingPieces, setAddingPieces] = useState(false);
  const [cornerColor, setCornerColor] = useState("white");
  const [piecesHidden, setPiecesHidden] = useState(false);
  const [boardHidden, setBoardHidden] = useState(false);
  const [tilesHidden, setTilesHidden] = useState(false);
  
  const pieces = ["Pawn", "Rook", "Knight", "Bishop", "Queen"];

  const initialBoard = setInitalBoard(squares.length); //array of default square objects formatted with color

  // empty dependency array means this effect runs only once on first render
  useEffect(() => {
    // Call buildBoardComponents function on the first render
    setSquares(setInitalBoard(5));
    setBoard(buildBoardComponents(squares));
  }, []);

  useEffect(() => {
    handleResetBoard();
  }, []);

  useEffect(() => {
    if(addingPieces){
      new Audio(addPieceSound).play();
    }
    else{
      new Audio(click).play();
    }
    setAddingPieces(false);
  },[rows, cornerColor, board, piecesHidden, boardHidden, tilesHidden, setGreenSquares]);

  function setInitalBoard(size){
    const initialSquares = emptyArr;

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let squareColor;
        squareColor = 
        (cornerColor === "white" ? (i + j) % 2 === 0 ? "white" : "grey"
          : (i + j + 1) % 2 === 0 ? "grey" : "white");
      
        const sq = {
          piece: {
            name: 'none',
            color: 'none',
          },
          color: squareColor,
          row : i,
          col : j,
        }
        initialSquares[i][j] = sq;
      }
    }
    return initialSquares;
  }

  function handleResetBoard(){
    setSquares(initialBoard);
    setMoveHistory([]);
    setBoard(buildBoardComponents(initialBoard, tilesHidden, piecesHidden));
  }

  function handleHideTiles(){
    setTilesHidden(true);
    setBoard(buildBoardComponents(squares, true, piecesHidden))
  }

  function handleShowTiles(){
    setTilesHidden(false);
    setBoard(buildBoardComponents(squares, false, piecesHidden))
  }

  function handleHideBoard() {
    setBoardHidden(true);
  }

  function handleShowBoard() {
    setBoardHidden(false);
  }

  function handleHidePieces(){
    setPiecesHidden(true);
    setBoard(buildBoardComponents(squares, tilesHidden, true))
  }

  function handleShowPieces(){
    setPiecesHidden(false);
    setBoard(buildBoardComponents(squares, tilesHidden, false))
  }

  function findEmptyIndexs(size){
    const emptyIndices = [];

    // Loop through each row and column to find empty indices
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const sq = squares[i][j];
        if (sq.piece.name === "none") { //if name is not set
          emptyIndices.push([i, j]); // Add empty index to array
        }
      }
    }
    // If there are no empty indices, return false
    if (emptyIndices.length === 0) {
      return false;
    }
    else{
      return emptyIndices;
    }
  }

  function handleAddPiece() {
    //Select a random index from Pieces[]
    setAddingPieces(true);

    const pieceName = pieces[Math.floor(Math.random() * pieces.length)];
    const pieceColor = Math.floor(Math.random() * 2) === 0 ? "black" : "white";

    const piece = {
      name: pieceName,
      color: pieceColor
    }
    addPiece(piece);
    setBoard(buildBoardComponents(squares, tilesHidden, piecesHidden));
  }

  function addPiece(piece) {
    // Create an array to store empty indices
    const emptyIndexes = findEmptyIndexs(5);

    if(!emptyIndexes){
      setMoveHistory([...moveHistory, ["Board is full"]]);
    }
    else{
      // Select a random empty index and set it to the given value
      const [randRow, randCol] =
      emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
  
      let sq = squares[randRow][randCol];
  
      sq.piece = piece;
  
      //const index = [(randCol + 1) , (squares.length - randRow )];
      setSquares(updateSquares(randRow, randCol, sq));
      const humanCol = randCol + 1;
      const humanRow = 5 - (randRow );
      setMoveHistory([...moveHistory, [sq.piece.name, [humanCol, humanRow]]]);
      return true;
    }
    return false;
  }
  
  function handleSquareClick(row, col){
    if(squareContainsPiece(row, col)){
      const sq = squares[row][col];
      sq.color = 'green';
      setSquares(updateSquares(row, col, sq));
      setBoard(buildBoardComponents(squares, tilesHidden, piecesHidden))
      return true;
    }
    return false;
  }

  function squareContainsPiece(row, col){
    const val = squares[row][col];
    if(val.piece.name !== 'none'){
      return true;
    }
    else return false;
  }

  function reverseRows(arr) {
    return arr.map(row => reverseColumns(row));
  }

  function reverseColumns(arr) {
    return arr.map(row => reverseColumns(row));
  }

  function handleFlipBoard() {
    setRows(reverseColumns(rows));
    setRows(reverseRows(rows));
    setGreenSquares(reverseColumns(greenSquares));
    setGreenSquares(reverseRows(greenSquares))
    setBoard(buildBoardComponents(squares, tilesHidden, piecesHidden));
    setMoveHistory([...moveHistory, ["Flipped Board"]]);
  }

  function handleReverseRows() {
    const reversedRows = reverseRows(squares);
    setSquares(reversedRows);
    setBoard(buildBoardComponents(reversedRows, tilesHidden, piecesHidden));
    setMoveHistory([...moveHistory, ["Reversed Rows"]]);
  }

  function handleReverseColumns() {
    const reversedColumns = reverseColumns(squares);
    setSquares(reversedColumns);
    setBoard(buildBoardComponents(reversedColumns, tilesHidden, piecesHidden));
    setMoveHistory([...moveHistory, ["Reversed Columns"]]);
  }

  function copyArrayOfObjects(originalArray) {
    return originalArray.map(obj => ({ ...obj }));
  }

  function updateSquares(row, col, square){
    const squaresCopy = copyArrayOfObjects(squares);
    squaresCopy[row][col] = square;

    return squaresCopy;
  }

  function buildBoardComponents(arr, hideTiles, hidePieces) {
    const retArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        const sq = arr[i][j];

        retArr.push(
            <Square
              type = ""
              piece = {hidePieces ? {name: "none", color: "none"} : sq.piece}
              color = {hideTiles ? "white" : sq.color}
              row = {sq.row}
              col = {sq.col}
              onClickFunction = {() => handleSquareClick(i, j)}
            />
        );
      }
    }
    return retArr;
  }

  return (
    <>
      <div className="sideBySide">
        <div className="chessBoardContainer">
          {boardHidden ? (
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
        {boardHidden ? (
          <button onClick={handleShowBoard} className="button">
            Show Board
          </button>
        ) : (
          <button onClick={handleHideBoard} className="button">
            Hide Board
          </button>
        )}
        {piecesHidden ? (
          <button onClick={handleShowPieces} className="button">
            Show Pieces
          </button>
        ) : (
          <button onClick={handleHidePieces} className="button">
            Hide Pieces
          </button>
        )}
        {tilesHidden ? (
          <button onClick={handleShowTiles} className="button">
          Show Tiles
          </button>
        ) : (
          <button onClick={handleHideTiles} className="button">
          Hide Tiles
          </button>
        )}
        <button onClick={handleAddPiece} className="button">
          Add Piece
        </button>
        <button onClick={handleFlipBoard} className="button">
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
