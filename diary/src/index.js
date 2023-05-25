import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./diary/Main";
import Pic from "./diary/pic";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pic" element={<Pic />} />
      </Routes>
      {/* <App /> */}
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
