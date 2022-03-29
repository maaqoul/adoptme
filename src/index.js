import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

function App() {
  const theme = useState("green");
  return (
    <div
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
      }}
      className="p-0 m-0"
    >
      <ThemeContext.Provider value={theme}>
        <Router>
          <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
            <Link to="/" className="text-6xl text-white hover:text-gray-200">
              Adopt me
            </Link>
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
