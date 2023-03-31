import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
// import Footer from "./components/Footer";
import Draggable from "react-draggable";

function App() {
  return (
    <div className="relative">
      <Header />
      <Board />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
