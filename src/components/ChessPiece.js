import "./ChessPiece.css";

function ChessPiece({ type, piece, size }) {
  let pieceStyle;

    pieceStyle = ({
      width: size,
      height: size
    });

  if (!piece.isHidden) {
    if (piece.color === "white") {
      if (piece.name === "Queen") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/WhiteQueen.svg").default}
            style={pieceStyle}
            draggable={true}
          />
        );
      }
      if (piece.name === "King") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/WhiteKing.svg").default}
            style={pieceStyle}
            draggable={true}
          />
        );
      }
      if (piece.name === "Pawn") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/WhitePawn.svg").default}
            style={pieceStyle}
            draggable={true}
          />
        );
      }
      if (piece.name === "Rook") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/WhiteRook.svg").default}
            style={pieceStyle}
            draggable={true}
          />
        );
      }
      if (piece.name === "Bishop") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/WhiteBishop.svg").default}
            style={pieceStyle}
            draggable={true}
          />
        );
      }
      if (piece.name === "Knight") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/WhiteKnight.svg").default}
            style={pieceStyle}
            draggable={true}
          />
        );
      }
    }

    if (piece.color === "black") {
      if (piece.name === "Queen") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/BlackQueen.svg").default}
            style={pieceStyle}
          />
        );
      }
      if (piece.name === "King") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/BlackKing.svg").default}
            style={pieceStyle}
            draggable={true}
          />
        );
      }
      if (piece.name === "Pawn") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/BlackPawn.svg").default}
            style={pieceStyle}
          />
        );
      }
      if (piece.name === "Rook") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/BlackRook.svg").default}
            style={pieceStyle}
          />
        );
      }
      if (piece.name === "Bishop") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/BlackBishop.svg").default}
            style={pieceStyle}
          />
        );
      }
      if (piece.name === "Knight") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/BlackKnight.svg").default}
            style={pieceStyle}
          />
        );
      }
    }
  }
}

export default ChessPiece;
