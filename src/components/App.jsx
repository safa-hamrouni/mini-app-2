import React from "react";
import Header from "./Header.jsx";
import Photo from "./Photo.jsx";
import Recipe from "./Recipe.jsx";
import Instructions from "./Instructions.jsx";
import "../index.css";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Photo />
        <Recipe />
        <Instructions />
      </div>
    );
  }
}

export default App;
