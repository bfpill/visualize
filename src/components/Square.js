import { useState } from "react";
import ChessPiece from "./ChessPiece";
import "./Square.css"

function Square({ piece, color, row, col, onClick}) {

    function handleClick(e) {

      onClick();
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
      
      if(color === 'white'){
        e.target.classList.add('light-square-clicked');
        setTimeout(() => {
          e.target.classList.remove('light-square-clicked');
        }, 200);
      }
      if(color === 'grey'){
        e.target.classList.add('black-square-clicked');
        setTimeout(() => {
          e.target.classList.remove('black-square-clicked');
        }, 200);
      }

      if(color === 'green'){
        e.target.classList.add('green-square-clicked');
        setTimeout(() => {
          e.target.classList.remove('gren-square-clicked');
        }, 300);
      }
    }
  
    const squareStyle = {
      backgroundColor: color
    };

    return (
      <div className="square" 
      style={squareStyle} 
      onClick={handleClick} 
      data-row={row}
      data-col={col} 
      >

        <ChessPiece piece={piece}/>
      </div>
    )
}

export default Square;