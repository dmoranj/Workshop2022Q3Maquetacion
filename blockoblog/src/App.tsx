import React from "react";
import styles from "./app.module.scss";
import data from "./data/fakeData.json";

function App() {
  return (
    <div className="App">
      {data.map((element, index) => (
        <div key={index}>
          <div>{element.name}</div>
          <div>{element.sex}</div>
          <div>{element.job}</div>
          <div>{element.address}</div>
          <img src={element.avatar}></img>
        </div>
      ))}
    </div>
  );
}

export default App;
