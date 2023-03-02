import { useState } from "react";
import "./App.css";
import Ref from "./lesson1/Ref";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Memo from "./lesson2/Memo";
import Callback from "./lesson3/Callback";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigation />} />
        <Route path="useRef" element={<Ref />} />
        <Route path="memo" element={<Memo />} />
        <Route path="callback" element={<Callback />} />
      </Routes>
    </div>
  );
}

export default App;
