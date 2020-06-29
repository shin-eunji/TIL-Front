import React from "react";
import MyComponent from "./component/MyComponent";

const App = () => {
  return (
    <div>
      <MyComponent name="React" favoriteNumber={22}>
        리액트
      </MyComponent>
    </div>
  );
};

export default App;
