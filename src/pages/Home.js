import "./Home.css"
import { useState } from "react";
import Chessboard from "../components/Chessboard";
import MoveHistory from "../components/MoveHistory";

function Home() {
  return (
    <div className="home">
      <div className="titleContainer">
        <h1>Visualize Practice</h1>
      </div>
      <Chessboard />
      <h1></h1>
    </div>
  );
}

export default Home;
