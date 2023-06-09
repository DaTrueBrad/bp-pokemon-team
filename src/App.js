import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import TeamScreen from "./screens/TeamScreen";
import DexScreen from "./screens/DexScreen";
import axios from "axios";
import Bravo from "./components/Bravo";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <Header />

      <Buttons setToggle={setToggle} />
      {toggle ? <TeamScreen /> : <DexScreen />}
    </div>
  );
}

export default App;
