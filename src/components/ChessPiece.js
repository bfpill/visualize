import "./ChessPiece.css";

function ChessPiece({ piece }) {
  if (!piece.isHidden) {
    if (piece.color === "white") {
      if (piece.name === "Queen") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/WhiteQueen.svg").default}
            style={{ width: "103px", height: "103px" }}
            draggable={true}
          />
        );
      }
      if (piece.name === "Pawn") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/WhitePawn.svg").default}
            style={{ width: "103px", height: "103px" }}
            draggable={true}
          />
        );
      }
      if (piece.name === "Rook") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/WhiteRook.svg").default}
            style={{ width: "103px", height: "103px" }}
            draggable={true}
          />
        );
      }
      if (piece.name === "Bishop") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/WhiteBishop.svg").default}
            style={{ width: "103px", height: "103px" }}
            draggable={true}
          />
        );
      }
      if (piece.name === "Knight") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/WhiteKnight.svg").default}
            style={{ width: "103px", height: "103px" }}
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
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
      if (piece.name === "Pawn") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/BlackPawn.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
      if (piece.name === "Rook") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/BlackRook.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
      if (piece.name === "Bishop") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/BlackBishop.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
      if (piece.name === "Knight") {
        return (
          <img
            classname={piece.name}
            src={require("../svgs/BlackKnight.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
    }
  }
}

export default ChessPiece;
