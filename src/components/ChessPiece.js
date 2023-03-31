import { useDrag } from 'react-dnd';
import "./ChessPiece.css";
import { useState } from 'react';

function ChessPiece({ piece, color }) {

  const handleDragStart = (event) => {
    event.dataTransfer.setData("piece", piece);
    event.dataTransfer.setData("color", color);
  };

  if (piece.color === "white" || piece.color === "green") {
    if (piece.name === "Queen") {
      return (
        <img
          classname={piece}
          src={require("../svgs/WhiteQueen.svg").default}
          style={{ width: "103px", height: "103px" }}
          draggable={true}
          onDragStart={handleDragStart}
        />
      );
    }
    if (piece.name === "Pawn") {
        return (
          <img
            classname={piece}
            src={require("../svgs/WhitePawn.svg").default}
            style={{ width: "103px", height: "103px" }}
            draggable={true}
            onDragStart={handleDragStart}
          />
        );
      }
      if (piece.name === "Rook") {
        return (
          <img
            classname={piece}
            src={require("../svgs/WhiteRook.svg").default}
            style={{ width: "103px", height: "103px" }}
            draggable={true}
            onDragStart={handleDragStart}
          />
        );
      }
    if (piece.name === "Bishop") {
      return (
        <img
          classname={piece}
          src={require("../svgs/WhiteBishop.svg").default}
          style={{ width: "103px", height: "103px" }}
          draggable={true}
          onDragStart={handleDragStart}
        />
      );
    }
    if (piece.name === "Knight") {
        return (
          <img
            classname={piece}
            src={require("../svgs/WhiteKnight.svg").default}
            style={{ width: "103px", height: "103px" }}
            draggable={true}
            onDragStart={handleDragStart}
          />
        );
      }
  }

  if (piece.color === "black" || piece.color === 'green') {
    if (piece.name === "Queen") {
      return (
        <img
          classname={piece}
          src={require("../svgs/BlackQueen.svg").default}
          style={{ width: "103px", height: "103px" }}
        />
      );
    }
    if (piece.name === "Pawn") {
        return (
          <img
            classname={piece}
            src={require("../svgs/BlackPawn.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
      if (piece.name === "Rook") {
        return (
          <img
            classname={piece}
            src={require("../svgs/BlackRook.svg").default}
            style={{ width: "103px", height: "103px" }}
          />
        );
      }
    if (piece.name === "Bishop") {
      return (
        <img
          classname={piece}
          src={require("../svgs/BlackBishop.svg").default}
          style={{ width: "103px", height: "103px" }}
        />
      );
    }
    if (piece.name === "Knight") {
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
