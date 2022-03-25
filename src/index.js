import React from "react";
import ReactDOM from "react-dom";

import Pet from "./Pet";
import SearchParams from "./SearchParams";

function App() {
  return (
    <div>
      <h1 className="adopt-me">Adopt me</h1>
      <SearchParams />
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
