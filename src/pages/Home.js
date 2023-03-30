import "./Home.css";
import Chessboard from "../components/Chessboard";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
function Home() {
  return (
    <div className="home">
      <div className="titleContainer">
        <h1>Visualize Practice</h1>
      </div>
      <DndProvider backend={HTML5Backend}>
        <Chessboard />
      </DndProvider>

      <h1></h1>
    </div>
  );
}

export default Home;
