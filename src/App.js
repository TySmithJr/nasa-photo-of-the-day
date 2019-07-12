import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import { Container } from "semantic-ui-react"
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
      <h1 className="title">{state.title}</h1>
       
      <p className="date">{state.date}</p>
      
      <Container textAlign='center'> {state.explanation}</Container>
      
      {/* <p className="media">{state.media_type}</p> */}
      
      {/* <p className="version">{state.service_version}</p> */}
        
      <div >{state.media_type === "image" ? <img className="image" src={state.url} alt="NASA" /> : <iframe src={state.url} > </iframe>}
     
      </div>
      
        
        
    </div>
  );

  }
      
        
    

