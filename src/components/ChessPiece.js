import "./ChessPiece.css";

function ChessPiece({name, color}) {

  if (color === "white" ) {
    if (name === "Queen") {
      return (
        <img
          classname={name}
          src={require("../svgs/WhiteQueen.svg").default}
          style={{ width: "103px", height: "103px" }}
          draggable={true}
        />
      );
    }
    if (name === "Pawn") {
        return (
          <img
            classname={name}
            src={require("../svgs/WhitePawn.svg").default}
            style={{ width: "103px", height: "103px" }}
            draggable={true}
          />
        );
      }
      if (name === "Rook") {
        return (
          <img
            classname={name}
            src={require("../svgs/WhiteRook.svg").default}
            style={{ width: "103px", height: "103px" }}
            draggable={true}
          />
        );
      }
    if (name === "Bishop") {
      return (
        <img
          classname={name}
          src={require("../svgs/WhiteBishop.svg").default}
          style={{ width: "103px", height: "103px" }}
          draggable={true}
        />
      );
    }
    if (name === "Knight") {
        return (
          <img
            classname={name}
            src={require("../svgs/WhiteKnight.svg").default}
            style={{ width: "103px", height: "103px" }}
            draggable={true}
          />
        );
      }
  }

  if (color === "black") {
    if (name === "Queen") {
      return (
        <img
          classname={name}
          src={require("../svgs/BlackQueen.svg").default}
          style={{ width: "103px", height: "103px" }}
        />
      );
    }
    if (name === "Pawn") {
        return (
          <img
            classname={name}
            src={require("../svgs/BlackPawn.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
      if (name === "Rook") {
        return (
          <img
            classname={name}
            src={require("../svgs/BlackRook.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
    if (name === "Bishop") {
      return (
        <img
          classname={name}
          src={require("../svgs/BlackBishop.svg").default}
          style={{ width: "103px", height: "103px" }}
        />
      );
    }
    if (name === "Knight") {
        return (
          <img
            classname={name}
            src={require("../svgs/BlackKnight.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
  }
}

export default ChessPiece;
