import React, { useState } from 'react';
import ChessPiece from "./ChessPiece";
import "./Square.css"
import CheckmarkInCorner from './Checkmark';

function Square({type, isHidden, piece, isPastel, pastelColor, chessColor, row, col, size, onClickFunction}) {

  let color = isPastel ? pastelColor : chessColor
  let width = isPastel ? size -2 : size;
  let border = isPastel ? '1px solid white' : '0px';
  let squareStyle = ({
    color: color,
    backgroundColor: isHidden ? "white" : (type.clicked === "correct" ? '#77DD77' : color),
    width: width,
    height: width,
    border: border,
  });

  let showingOptionsStyle = ({
    color: color,
    backgroundColor: isHidden ? "white" : (type.clicked === "correct" ? '#77DD77' : color),
    width: width,
    height: width,
    border: border,
  });

  function handleClick(e) {
    const wasCorrect = onClickFunction(); //dont need now but good for callbacks
  }

  return (
      <div className="square"
        style={squareStyle}
        onClick={handleClick}
        data-row={row}
        data-col={col}
      >
        <ChessPiece piece={piece} size={isPastel ? size -2 : size}/>
      { 
        type.clicked === "correct" ? <CheckmarkInCorner size={size} /> : null
      }
      </div>
    )
  }


export default Square;
