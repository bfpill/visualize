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
    backgroundColor: isHidden ? "white" : color,
    width: width,
    height: width,
    border: border,
  });

  function handleClick(e) {
    const wasCorrect = onClickFunction();
    if (wasCorrect) {
      squareStyle = ({
        backgroundColor: "#77DD77",
        width: size,
        height: size
      });
      if (color === 'white') {
        e.target.classList.add('white-square-wrong');
        setTimeout(() => {
          e.target.classList.remove('white-square-wrong');
        }, 200);
      } else if (color === 'grey') {
        e.target.classList.add('black-square-wrong');
        setTimeout(() => {
          e.target.classList.remove('black-square-wrong');
        }, 200);
      }
    }
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
