import "./Home.css"
import { useState } from "react";
import Chessboard from "../components/Chessboard";

function Home() {
  return (
    <div className="home">
      <h1>Visualize</h1>
      <Chessboard />
      <h1></h1>
    </div>
  );
}

export default Home;
