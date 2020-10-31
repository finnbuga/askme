import React from "react";

import Header from "./components/Header";
import Questions from "./components/Questions";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(245, 245, 245)" }}>
      <div style={{ maxWidth: 500, margin: "0 auto" }}>
        <Header />
        <Questions />
      </div>
    </div>
  );
}

export default App;
