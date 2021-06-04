import React from "react";
import Header from "./components/Header.jsx";
import Photo from "./components/Photo.jsx";
import Recipe from "./components/Recipe.jsx";
import Instructions from "./components/Instructions.jsx";
import "./style.css";

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
