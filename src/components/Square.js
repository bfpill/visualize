import ChessPiece from "./ChessPiece";
import "./Square.css"

function Square({isHidden, piece, color, row, col, onClickFunction}) {
  let squareStyle;
    function handleClick(e) {
      const wasCorrect = onClickFunction();
      if(wasCorrect){
        squareStyle = {
          backgroundColor: "#77DD77"
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
    if(isHidden){
      squareStyle = {
        backgroundColor: 'white'
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

        <ChessPiece piece={piece}/>
      </div>
    )
}

export default Square;