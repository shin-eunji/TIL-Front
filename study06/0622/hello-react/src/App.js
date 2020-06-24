import React from "react";

function App() {
  const name = "리액트 입니다";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return (
    <div style={style}>
      {/* {name === "리액트" ? <h1>리액트입니다.</h1> : <h1>리액트 아닙니다.</h1>} */}
      {/* {name === "리액트" ? <h1>리액트입니다.</h1> : null} */}
      {name}
      <input />
    </div>
  );
}

export default App;
