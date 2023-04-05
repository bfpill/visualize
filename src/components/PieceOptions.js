import ChessPiece from "./ChessPiece";

import "./PieceOptions.css"
function PieceOptions () {
    return(
        <>
        <div className="piece-options-container">
            <ChessPiece size = "10" piece={{name: "Queen", color: "white", isHidden: false }}/>
            <ChessPiece size = "10" piece={{name: "King", color: "white", isHidden: false }}/>
            <ChessPiece size = "10" piece={{name: "Knight", color: "white", isHidden: false}}/>
            <ChessPiece size = "10" piece={{name: "Bishop", color: "white", isHidden: false}}/>
            <ChessPiece size = "10" piece={{name: "Rook", color: "white", isHidden: false}}/>
            <ChessPiece size = "10" piece={{name: "Pawn", color: "white", isHidden: false}}/>
            <ChessPiece size = "10" piece={{name: "Queen", color: "black", isHidden: false }}/>
            <ChessPiece size = "10" piece={{name: "King", color: "black", isHidden: false }}/>
            <ChessPiece size = "10" piece={{name: "Knight", color: "black", isHidden: false}}/>
            <ChessPiece size = "10" piece={{name: "Bishop", color: "black", isHidden: false}}/>
            <ChessPiece size = "10" piece={{name: "Rook", color: "black", isHidden: false}}/>
            <ChessPiece size = "10" piece={{name: "Pawn", color: "black", isHidden: false}}/>
            </div>
        </>
    )
}

export default PieceOptions;