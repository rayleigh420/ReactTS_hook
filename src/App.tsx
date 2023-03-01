import { useState } from "react";
import "./App.css";
import Ref from "./lesson1/Ref";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigation />} />
        <Route path="ref" element={<Ref />} />
      </Routes>
    </div>
  );
}

export default App;
