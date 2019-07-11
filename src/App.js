import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [state, setState] = useState({
    date: "",
    explanation: "",
    media_type: "",
    service_version: "",
    title: "",
    url: ""
  })
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
