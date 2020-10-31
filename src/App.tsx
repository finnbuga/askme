import React from "react";
import Header from "./components/Header";
import Questions from "./components/Questions";

const style = {
  background: {
    height: "100vh",
    backgroundColor: "rgb(245, 245, 245)",
  },
  middleStripe: {
    height: "100vh",
    backgroundColor: "white",
    maxWidth: 500,
    margin: "0 auto",
  },
};

function App() {
  return (
    <div style={style.background}>
      <div style={style.middleStripe}>
        <Header />
        <Questions />
      </div>
    </div>
  );
}

export default App;
