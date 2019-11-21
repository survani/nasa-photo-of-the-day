import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import Loader from 'react-loader-spinner';
import './allstyles.scss';


function App() {
  //This is being use to set the state for grabbing the API.
  const [nasaPics, setNasaPics] = useState('');

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=vNjINdk9XdxPhvsS9Dbzbp5tyIbhb1l0RtFknZe1')
      .then(response => {
        setNasaPics(response.data)
        // console.log('setNasaPics', setNasaPics)
        console.log('response.data', response.data);
      })

      .catch(error => {
        console.log(error);
      });
  }, [])

  if (!nasaPics)
    return (
      <section className='loader'>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </section>
    );
  return (
    <React.Fragment>
      <div className='App'>
        <h1>Nasa Picture of the Day </h1>
      </div>

      <section className='display-picture'>
        <img src={nasaPics.url} className='pic-day' alt='Pictures' height='250px' width='250px' />
        <div className = 'desc-of-pic'>
        <h2>About This Image</h2>
        <p>{nasaPics.explanation}</p>
        </div>
      </section>
      <section className = 'by-of-pic'>
        <div className='button-container'>
        <button>Title: {nasaPics.title}</button>
        <button>By: {nasaPics.copyright}</button>
        <button>Day: {nasaPics.date}</button>
        </div>
        </section>

      


    </React.Fragment>
  );
}

export default App;