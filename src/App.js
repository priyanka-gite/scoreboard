// import logo from "./logo.svg";
import "./App.css";
import react from "react";
import Title from "./Components/Title";
// import Player from "./Components/Player";
import Scoreboard from "./Components/Scoreboard";
// import AddPlayerForm from "./Components/AddPlayerForm";
function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
