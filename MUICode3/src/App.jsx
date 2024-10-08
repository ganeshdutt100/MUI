import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Code1 from "./Components/Code1";
import Code2 from "./Components/Code2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Code1 />
      <Code2 />
    </>
  );
}

export default App;
