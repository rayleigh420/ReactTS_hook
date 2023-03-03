import { useState } from "react";
import "./App.css";
import Ref from "./lesson1/Ref";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import RMemo from "./lesson2/RMemo";
import Callback from "./lesson3/Callback";
import Memo from "./lesson4/Memo";
import Context from "./lesson5/Context";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigation />} />
        <Route path="useRef" element={<Ref />} />
        <Route path="Rmemo" element={<RMemo />} />
        <Route path="callback" element={<Callback />} />
        <Route path="memo" element={<Memo />} />
        <Route path="context" element={<Context />} />
      </Routes>
    </div>
  );
}

export default App;
