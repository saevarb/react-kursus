import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppContext, initializeRootStore } from "./config";

function App() {
  return (
    <AppContext.Provider value={initializeRootStore()}>
      <div>This is an app</div>
    </AppContext.Provider>
  );
}

export default App;
