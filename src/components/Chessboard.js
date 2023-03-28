import { useState } from "react";
import ChessPiece from "./ChessPiece";
import "./Chessboard.css"

function Square({ piece, color, key, index, onClick }) {
    const [isDark, setIsDark] = useState(false);

    function handleClick(e) {
      if(index === "2,2"){
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
    }
  
    const squareStyle = {
      backgroundColor: isDark ? '#777' : color,
    };

    return (
      <div className="square" style={squareStyle} onClick={handleClick}>
        <ChessPiece piece={piece} color={color} />
      </div>
    )
}
  
  function Chessboard() {
    const squares = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const squareColor = (i + j) % 2 === 0 ? 'white' : 'grey';
        if(i === 1 && j === 2){
          squares.push(
            <Square
              piece='Queen'
              color={squareColor}
              key={`${i},${j}`}
              index={`${i},${j}`}
              onClick={() => console.log(`Square ${i},${j} clicked!`)}
            />
          );
          }
        else if(i === 0 && j === 1){
          squares.push(
            <Square
              piece='Bishop'
              color={squareColor}
              key={`${i},${j}`}
              index={`${i},${j}`}
              onClick={() => console.log(`Square ${i},${j} clicked!`)}
            />
          );
          }
        else{   
        squares.push(
          <Square
            piece='none'
            color={squareColor}
            key={`${i},${j}`}
            index={`${i},${j}`}
            onClick={() => console.log(`Square ${i},${j} clicked!`)}
          />
        );
        }
      }
    }
    return <div className="chessboard">{squares}</div>;
  }

export default Chessboard;