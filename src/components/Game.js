import PieceOptions from "./PieceOptions";
import React, { useRef, useEffect } from "react";
import Timer from './Timer';
import './Game.css';

function Game({ moveHistory, numColors }) {
  const historyBoxRef = useRef(null);

  useEffect(() => {
    // scroll to the bottom of historyBox when moveHistory changes
    historyBoxRef.current.scrollTop = historyBoxRef.current.scrollHeight;
  }, [moveHistory]);

  function handleStartNewGame(){

  }

  return (
    <div className='overall-container'>
     <h2>Game</h2>
    <div className = "history-container" ref={historyBoxRef}>
    <div className = "timer-container">
        <Timer seconds={90}/>
    </div>
    <PieceOptions/>
    <button onClick={handleStartNewGame} className="button">
        Start New Game
    </button>
    </div>
    </div>
  );
}

export default Game;
