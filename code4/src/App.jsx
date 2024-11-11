// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Buttons from "./components/Buttons";
import Music from "./components/Music";
import Navbar from "./components/Navbar";
// import Section1 from "./components/Section1";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <Section1 /> */}
      <Buttons />
      <Music />
    </>
  );
}

export default App;
