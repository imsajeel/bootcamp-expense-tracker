import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import IncExp from "./components/IncExp/IncExp";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncExp />
      </div>
    </div>
  );
}

export default App;
