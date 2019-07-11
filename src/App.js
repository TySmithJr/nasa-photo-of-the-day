import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

export default function App() {

  const [state, setState] = useState({
    date: "",
    explanation: "",
    media_type: "",
    service_version: "",
    title: "",
    url: ""
  })

  useEffect(  () => {
     fetchApod();
   }, []);
    function fetchApod() {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=9Gfi5MPOca6xMnQa7wlB4Y9fgYykxLAjcXDeXuGX")
        .then((response) => {
          console.log(response.data);
          setState(response.data);

        })
        .catch(error => console => (error))
    }
  


        console.log(axios);

  return (
    <div className="App">
      <h1>
       {state.title}
      </h1>
      <p>
      {state.date}
      </p>
      <p>
        {state.explanation}
      </p>
      <p>
        {state.media_type}
      </p>
      <p>
        {state.service_version}
      </p>
      <div>
        {state.media_type === "image" ? <img src={state.url} alt="NASA" /> : <iframe src={state.url} > </iframe>}
      </div>
    </div>
  );

  }

