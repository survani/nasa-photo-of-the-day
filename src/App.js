import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import "./App.css";
import axios from 'axios';


function App() {
  //This is being use to set the state for grabbing the API.
  const [nasaPics, setNasaPics] = useState('');

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=vNjINdk9XdxPhvsS9Dbzbp5tyIbhb1l0RtFknZe1')
    .then(response => { 
      setNasaPics(response.data.hdurl)
      // console.log('setNasaPics', setNasaPics)
    console.log('response.data', response.data);
    })

    .catch(error => {
       console.log(error);
  });
}, [])
  return (
    <div className='App'>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <img src={nasaPics} alt = 'Pictures' height ='250px' width = '250px' />
    </div>
  );
}

export default App;
