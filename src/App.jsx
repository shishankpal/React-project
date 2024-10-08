import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "red" }}
            onClick={()=>setColor("Red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "black" }}
            onClick={()=>setColor("black")}
          >
            black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "green" }}
            onClick={()=>setColor("green")}
          >
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "blue" }}
            onClick={()=>setColor("blue")}
          >
            blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "orange" }}
            onClick={()=>setColor("orange")}
          >
            orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "white" }}
            onClick={()=>setColor("white")}
          >
            white
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
