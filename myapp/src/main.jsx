import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./Redux/Reducer";

const appCart = legacy_createStore(Reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
  <Provider store={appCart}>
    <App />
  </Provider>
  </React.StrictMode>
);
