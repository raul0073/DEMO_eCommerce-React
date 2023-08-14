import { useState } from "react";
import BaseComp from "./Pages/Base";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <BaseComp />
    </BrowserRouter>
  );
}

export default App;
