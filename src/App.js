import React from "react";
import CardList from "./components/CardList/CardList";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <CardList />
        <Drawer />
      </div>

    </div>
  );
}

export default App;
