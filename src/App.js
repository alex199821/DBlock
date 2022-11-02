import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Success from "./Pages/Success";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
