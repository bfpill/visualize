import './MoveHistory.css';
import React, { useRef, useEffect } from "react";

function MoveHistory({ moveHistory }) {
  const historyBoxRef = useRef(null);

  useEffect(() => {
    // scroll to the bottom of historyBox when moveHistory changes
    historyBoxRef.current.scrollTop = historyBoxRef.current.scrollHeight;
  }, [moveHistory]);

  return (
    <div className='overall-container'>
     <h2>History</h2>
    <div className ="history-container" ref={historyBoxRef}>
        <div>
        {moveHistory[0]
          ? moveHistory.map((move) => {
            return move[0] != "Board is full" ? 
          (<p key={move} className="move">{move[1] != null ? ("Added " + move[0] + " on " + move[1]) : move[0]}</p>) : 
          (<p key={move} className="invalidMove">{move[0]}</p>) 
        })
          : <p className="move">No moves yet.</p>}
        </div>
    </div>
    </div>
  );
}

export default MoveHistory;
