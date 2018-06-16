import React from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer";
import "./Time.css";

const App = () => {
  return (
    <div>
      <Timer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
