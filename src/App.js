import React from 'react';
import './app.scss';
import PicCard from './components/PicCard';


function App() {

  return (
    <React.Fragment>

      <div className='navbar-container'>
        <h1>Nasa Picture of the Day </h1>
        <a href='http://localhost:3000/'>Home</a>
        <a href='http://localhost:3000/'>About Project</a>
        <a href='http://localhost:3000/'>Nasa Website</a>
      </div>
      < PicCard />
    </React.Fragment>
  );
}

export default App;