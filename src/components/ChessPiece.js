import { useDrag } from 'react-dnd';
import "./ChessPiece.css";

function ChessPiece({ piece, color }) {

  if (color === "white") {
    if (piece === "Queen") {
      return (
        <img
          classname={piece}
          src={require("../svgs/WhiteQueen.svg").default}
          style={{ width: "128px", height: "128px" }}
        />
      );
    }
    if (piece === "Bishop") {
      return (
        <img
          classname={piece}
          src={require("../svgs/WhiteBishop.svg").default}
          style={{ width: "128px", height: "128px" }}
        />
      );
    }
  }

  if (color === "grey") {
    if (piece === "Queen") {
      return (
        <img
          classname={piece}
          src={require("../svgs/BlackQueen.svg").default}
          style={{ width: "128px", height: "128px" }}
        />
      );
    }
    if (piece === "Bishop") {
      return (
        <img
          classname={piece}
          src={require("../svgs/BlackBishop.svg").default}
          style={{ width: "128px", height: "128px" }}
        />
      );
    }
  }
}

export default ChessPiece;
