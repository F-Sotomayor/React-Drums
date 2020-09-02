import React from "react";
import "./pad.css";

function Pad(props) {
  React.useEffect(() => {
    let audio;
    window.addEventListener("keydown", (e) => {
      if (e.key === props.drumkey || e.key === props.drumkey.toLowerCase()) {
        audio = new Audio("sounds/" + `${e.key}` + ".wav");
        audio.play();
      }
    });
  });
  return (
    <div key={props.id} className="pad">
      <h2>{props.drumkey}</h2>
      <h3>{props.desc}</h3>
      <audio src={`${props.drumkey}.wav`} />
    </div>
  );
}

export default Pad;
