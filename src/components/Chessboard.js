import { useState, useEffect } from "react";
import Square from "./Square";
import addPieceSound from '../sounds/move-self.mp3'
import click from '../sounds/click.wav'
import MoveHistory from "./MoveHistory";
import getRandomPastelArray from "../functions/getRandomPastel";

import "./Chessboard.css";
import { render } from "@testing-library/react";
function Chessboard() {
  const [moveHistory, setMoveHistory] = useState([]);

  const [boardSize, setBoardSize] = useState(5);
  const [emptyArr, setEmptyArr] = useState(generateEmptyArr(boardSize));

  const [greenSquares, setGreenSquares] = useState(emptyArr);
  const [rows, setRows] = useState(emptyArr);
  const [squares, setSquares] = useState(emptyArr);
  const [board, setBoard] = useState([[]]);

  const [addingPieces, setAddingPieces] = useState(false);
  const [cornerColor, setCornerColor] = useState("white");
  const [piecesHidden, setPiecesHidden] = useState(false);
  const [boardHidden, setBoardHidden] = useState(false);
  const [tilesHidden, setTilesHidden] = useState(false);
  const [numColors, setNumColors] = useState(2);
 
  
  const pieces = ["Pawn", "Rook", "Knight", "Bishop", "Queen"];
  let colorArr = getRandomPastelArray(numColors);

  //run this after all state / vars has been declared
  const initialBoard = setInitialBoard(boardSize); //array of default square objects formatted with color

  function generateEmptyArr(size) {
    const arr = new Array(size).fill(null).map(() => new Array(size).fill("none"));
    return arr;
  }

  // empty dependency array means this effect runs only once on first render
  useEffect(() => {
    // Call buildBoardComponents function on the first render
    setSquares(setInitialBoard(boardSize));
    setBoard(buildBoardComponents(squares));
  }, []);

  useEffect(() => {
    handleResetBoard();
  }, []);

  useEffect((numColors) => {
    const updatedSquares = setInitialBoard(boardSize, numColors);
    setSquares(updatedSquares);
    setBoard(buildBoardComponents(updatedSquares));
    setMoveHistory([]);
  }, [numColors]);

  useEffect((boardSize) => {
    const updatedSquares = setInitialBoard(boardSize, numColors);
    setSquares(updatedSquares);
    setBoard(buildBoardComponents(updatedSquares));
    setMoveHistory([]);
  }, [boardSize]);

  useEffect(() => {
    if(addingPieces){
      new Audio(addPieceSound).play();
    }
    else{
      new Audio(click).play();
    }
    setAddingPieces(false);
  },[rows, cornerColor, board, piecesHidden, tilesHidden, boardHidden, setGreenSquares]);


  function getRandomPastel(usedIndices, numColors){
    var usedIndices = []; // Array to keep track of used indices
    var numColors = colorArr.length;
    var index = Math.floor(Math.random() * numColors);
    
    while (usedIndices.indexOf(index) !== -1) { // Keep generating random indices until we get one that hasn't been used yet
      index = Math.floor(Math.random() * numColors);
    }
    
    usedIndices.push(index); // Add the index to the usedIndices array
    return colorArr[index];
  }

  function setInitialBoard(size, numColors){
    const initialSquares = emptyArr;
    const squareSize = (515 / boardSize);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let squareColor;
        squareColor = 
        (cornerColor === "white" ? (i + j) % 2 === 0 ? "white" : "grey"
          : (i + j + 1) % 2 === 0 ? "grey" : "white");
      
        const sq = {
          piece: {
            isHidden: false,
            name: 'none',
            color: 'none',
          },
          type: 'unclicked',
          size: squareSize,
          isHidden: false,
          color: getRandomPastel(numColors),
          row : i,
          col : j,
        }
        initialSquares[i][j] = sq;
      }
    }
    return initialSquares;
  }

  function updateProperty(arr, propName, propValue) {
    return arr.map(row =>
      row.map(obj => ({ ...obj, [propName]: propValue }))
    );
  }

  function updatePiecesHidden(arr, isHidden){
    return arr.map(row =>
      row.map(sq => {
        const sqCopy = sq;
        if(isHidden){
          sqCopy.piece.isHidden = true;
        }
        else{
          sqCopy.piece.isHidden = false;
        }
        return sqCopy;
      }
    ))
  }

  function handleIncreaseBoardSize(){
    setEmptyArr(generateEmptyArr(boardSize + 1));
    setBoardSize(boardSize + 1);
  }

  function handleDecreaseBoardSize(){
    setEmptyArr(generateEmptyArr(boardSize - 1));
    setBoardSize(boardSize - 1);
  }

  function handleAddColor(){
    setNumColors(numColors + 1);
  }

  function handleSubtractColor(){
    if(numColors > 2){
      setNumColors(numColors - 1);
    }
  }

  function handleResetBoard(){
    setSquares(initialBoard);
    setMoveHistory([]);
    setBoard(buildBoardComponents(initialBoard));
  }
  
  function handleHideTiles(){
    setTilesHidden(true);
    const updatedSquares = updateProperty(squares, 'isHidden', true);
    setSquares(updatedSquares);
    setBoard(buildBoardComponents(updatedSquares, piecesHidden));
  }

  function handleShowTiles(){
    setTilesHidden(false);
    const updatedSquares = updateProperty(squares, 'isHidden', false);
    setSquares(updatedSquares);
    setBoard(buildBoardComponents(updatedSquares));
  }

  function handleHideBoard() {
    setBoardHidden(true);
  }

  function handleShowBoard() {
    setBoardHidden(false);
  }

  function handleHidePieces(){
    setPiecesHidden(true);
    const updatedSquares = updatePiecesHidden(squares, true);
    setSquares(updatedSquares);
    setBoard(buildBoardComponents(updatedSquares));
  }

  function handleShowPieces(){
    setPiecesHidden(false);
    const updatedSquares = updatePiecesHidden(squares, false);
    setSquares(updatedSquares);
    setBoard(buildBoardComponents(updatedSquares))
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

  function reverseRows(arr) {
    return arr.map(row => reverseColumns(row));
  }

  function reverseColumns(arr) {
    return arr.reverse();
  }

  function handleFlipBoard() {
    // I have no idea why setSquares has to be called twice.. but ... it doesnt seem to cause any harm.. 
    let updatedSquares = reverseColumns(squares); 
    
    setSquares(updatedSquares);
    updatedSquares = reverseRows(updatedSquares); //finish it off with horiztontal bludgeon 

    setSquares(updatedSquares);
  
    setBoard(buildBoardComponents(updatedSquares));
    setMoveHistory([...moveHistory, ["Flipped Board"]]);
  }

  function handleReverseRows() {
    const updatedSquares = reverseRows(squares);

    setSquares(updatedSquares);
    setBoard(buildBoardComponents(updatedSquares));
    setMoveHistory([...moveHistory, ["Reversed Rows"]]);
  }

  function handleReverseColumns() {
    const updatedSquares = reverseColumns(squares);

    setSquares(updatedSquares);
    setBoard(buildBoardComponents(updatedSquares));
    setMoveHistory([...moveHistory, ["Reversed Columns"]]);
  }

  function handleAddPiece() {
    //Select a random index from Pieces[]
    setAddingPieces(true);

    const pieceName = pieces[Math.floor(Math.random() * pieces.length)];
    const pieceColor = Math.floor(Math.random() * 2) === 0 ? "black" : "white";

    const piece = {
      isHidden: piecesHidden,
      name: pieceName,
      color: pieceColor
    }

    addPiece(piece);
    setBoard(buildBoardComponents(squares));
  }

  function addPiece(piece) {
    // Create an array to store empty indices
    const emptyIndexes = findEmptyIndexs(boardSize);

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
      const humanRow = boardSize - (randRow );
      setMoveHistory([...moveHistory, [sq.piece.name, [humanCol, humanRow]]]);
      return true;
    }
    return false;
  }
  
  function handleSquareClick(row, col){
    if(squareContainsPiece(row, col)){
      const sq = squares[row][col];
      sq.type = 'correct';
      const updatedSquares = updateSquares(row, col, sq);
      setSquares(updatedSquares);
      //essential to pass updatedSquares as this avoid asynchronous state tomfoolery
      setBoard(buildBoardComponents(updatedSquares)); 
      return true; //Square.js uses this return internally to render animations
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

  function copyArrayOfObjects(arr) {
    const newArr = arr.map(row => row.map(obj => ({...obj}))); // create a new copy of the 2D array and its objects
    return newArr;
  }

  function updateSquares(row, col, sq){
    const squaresCopy = copyArrayOfObjects(squares); //state variable
    squaresCopy[row][col] = sq;

    return squaresCopy;
  }

  function buildBoardComponents(arr) {
    const retArr = [];
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        const sq = arr[i][j];
        retArr.push(
            <Square
              type = {sq.type}
              size = {sq.size}
              isHidden={sq.isHidden}
              piece = {sq.piece}
              color = {sq.color}
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

        <MoveHistory moveHistory={moveHistory} numColors={numColors}/>
      </div>

      <div className="bottom-container">
      <button onClick={handleIncreaseBoardSize} className="button">
           + Size
        </button>

        <button onClick={handleDecreaseBoardSize} className="button">
           - Size
        </button>
      <button onClick={handleAddColor} className="button">
          + Color
        </button>
        <button onClick={handleSubtractColor} className="button">
          - Color
        </button>
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
