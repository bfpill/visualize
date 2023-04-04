import React, { useState } from 'react';
import ChessPiece from "./ChessPiece";
import "./Square.css"

function Square({type, isHidden, piece, color, row, col, size, onClickFunction}) {

  let squareStyle = ({
    backgroundColor: isHidden ? "white" : color,
    width: size,
    height: size
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
        e.target.classList.add('white-to-green');
        setTimeout(() => {
          e.target.classList.remove('white-to-green');
        }, 200);
      } else if (color === 'grey') {
        e.target.classList.add('black-to-green');
        setTimeout(() => {
          e.target.classList.remove('black-to-green');
        }, 200);
      }
    } else {
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
      <ChessPiece piece={piece} size={size}/>
    </div>
  )
}

export default Square;
