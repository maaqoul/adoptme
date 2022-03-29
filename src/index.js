import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

function App() {
  const theme = useState("green");
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Router>
          <header>
            <Link to="/">Adopt me</Link>
          </header>

          <Routes>
            <Route element={<SearchParams />} path="/" />
            <Route element={<Details />} path="details/:id" />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
