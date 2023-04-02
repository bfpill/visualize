import { useState } from "react";
import ChessPiece from "./ChessPiece";
import "./Square.css"

function Square({type, piece, color, row, col, onClickFunction}) {

    function handleClick(e) {
      onClickFunction();
      if(color === 'white'){
        e.target.classList.add('white-secret-square-clicked');
        setTimeout(() => {
          e.target.classList.remove('white-secret-square-clicked');
        }, 300);
      }
      
      if(color === 'grey'){
        e.target.classList.add('black-secret-square-clicked');
        setTimeout(() => {
          e.target.classList.remove('black-secret-square-clicked');
        }, 200);
      }

      if(color === 'green'){
        e.target.classList.add('green-square-clicked');
        setTimeout(() => {
          e.target.classList.remove('green-square-clicked');
        }, 300);
      }
    }
    let squareStyle;

    if(type === 'greenSquare'){
      squareStyle = {
        backgroundColor: 'green'
      };
    }
    else{
      squareStyle = {
        backgroundColor: color
      };
    }

    return (
      <div className="square" 
      style={squareStyle} 
      onClick={handleClick} 
      data-row={row}
      data-col={col} 
      >

        <ChessPiece name={piece.name} color={piece.color}/>
      </div>
    )
}

export default Square;