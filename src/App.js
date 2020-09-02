import React from "react";
import "./App.css";
import Pad from "./Pad";

const pads = [
  { drumkey: "A", desc: "CLAP", id: "1" },
  { drumkey: "S", desc: "BOOM", id: "2" },
  { drumkey: "D", desc: "CHOK", id: "9" },
  { drumkey: "F", desc: "SLIDE", id: "3" },
  { drumkey: "G", desc: "ROCK", id: "4" },
  { drumkey: "H", desc: "WAA", id: "5" },
  { drumkey: "J", desc: "WIJI", id: "6" },
  { drumkey: "K", desc: "WOOHA", id: "7" },
  { drumkey: "L", desc: "RAPT", id: "8" },
];

function App(props) {
  return (
    <div className="pad-container">
      {pads.map((pad) => {
        return <Pad {...pad} />;
      })}
    </div>
  );
}

export default App;
