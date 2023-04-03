import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <Board />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
