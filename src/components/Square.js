import { useState } from "react";
import ChessPiece from "./ChessPiece";
import "./Square.css"

function Square({type, piece, color, row, col, onClickFunction}) {
    let squareStyle;
    function handleClick(e) {
      const wasCorrect = onClickFunction();
      if(wasCorrect){
          squareStyle = {
            backgroundColor: 'green',
          };
          if(color === 'white'){
            e.target.classList.add('white-to-green');
            setTimeout(() => {
              e.target.classList.remove('white-to-green');
            }, 200);
          }
          else if(color === 'grey'){
            e.target.classList.add('black-to-green');
            setTimeout(() => {
              e.target.classList.remove('black-to-green');
            }, 200);
          }
      }
      else{
        squareStyle = {
          backgroundColor: color
        };
        if(color === 'white'){
          e.target.classList.add('white-square-wrong');
          setTimeout(() => {
            e.target.classList.remove('white-square-wrong');
          }, 200);
        }
        else if(color === 'grey'){
          e.target.classList.add('black-square-wrong');
          setTimeout(() => {
            e.target.classList.remove('black-square-wrong');
          }, 200);
        }
      }
    }
    squareStyle = {
      backgroundColor: color
    };
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