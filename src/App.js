import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import Loader from 'react-loader-spinner';
import HeaderH1 from './Styling/headerstyle';
import NavContainer, { AnchorContainer } from './Styling/NavStyle';
import Image, { InnerImage, InnerTextContainer } from "./Styling/Image";
import Button, { ButtonContainer } from './Styling/Buttons';
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

      <NavContainer>
        <AnchorContainer href='http://localhost:3000/'>Home</AnchorContainer>
        <AnchorContainer href='https://apod.nasa.gov/apod/astropix.html'>About Project</AnchorContainer>
        <AnchorContainer href='https://apod.nasa.gov/apod/astropix.html'>Nasa Website</AnchorContainer>
      </NavContainer>

      <HeaderH1>
        <h1>Nasa Picture of the Day </h1>
      </HeaderH1>

      <Image>
        <InnerImage src={nasaPics.url} className='pic-day' alt='Pictures' height='250px' width='250px' />
      </Image>
      <InnerTextContainer>
          <h2>About This Image</h2>
          <p>{nasaPics.explanation}</p>
        </InnerTextContainer>
        <ButtonContainer>
        <a href='https://en.wikipedia.org/wiki/Simeis_147'><Button>Title: {nasaPics.title}</Button></a>
        <Button>By: {nasaPics.copyright}</Button>
        <Button>Day: {nasaPics.date}</Button>
      </ButtonContainer>
    </React.Fragment>
  );
}

export default App;