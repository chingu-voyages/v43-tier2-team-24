import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden scrollbar-none">
      <Background />
      <Header />
      <Sidebar />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
