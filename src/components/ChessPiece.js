import { useDrag } from 'react-dnd';
import "./ChessPiece.css";

function ChessPiece({ piece, color }) {

  if (color === "white") {
    if (piece === "Queen") {
      return (
        <img
          classname={piece}
          src={require("../svgs/WhiteQueen.svg").default}
          style={{ width: "103px", height: "103px" }}
        />
      );
    }
    if (piece === "Pawn") {
        return (
          <img
            classname={piece}
            src={require("../svgs/WhitePawn.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
      if (piece === "Rook") {
        return (
          <img
            classname={piece}
            src={require("../svgs/WhiteRook.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
    if (piece === "Bishop") {
      return (
        <img
          classname={piece}
          src={require("../svgs/WhiteBishop.svg").default}
          style={{ width: "103px", height: "103px" }}
        />
      );
    }
    if (piece === "Knight") {
        return (
          <img
            classname={piece}
            src={require("../svgs/WhiteKnight.svg").default}
            style={{ width: "103px", height: "103px" }}
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
          style={{ width: "103px", height: "103px" }}
        />
      );
    }
    if (piece === "Pawn") {
        return (
          <img
            classname={piece}
            src={require("../svgs/BlackPawn.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
      if (piece === "Rook") {
        return (
          <img
            classname={piece}
            src={require("../svgs/BlackRook.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
    if (piece === "Bishop") {
      return (
        <img
          classname={piece}
          src={require("../svgs/BlackBishop.svg").default}
          style={{ width: "103px", height: "103px" }}
        />
      );
    }
    if (piece === "Knight") {
        return (
          <img
            classname={piece}
            src={require("../svgs/BlackKnight.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
  }
}

export default ChessPiece;
