import React, { useEffect, useState } from "react";
import axios from "axios";
import PicCardLink from './PicCardLink'

const PicCard = () => {
     //This is being use to set the state for grabbing the API.
 const [nasaPics, setNasaPics] = useState({});

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
 }, []);

   return (

    <PicCardLink 
        title={nasaPics.title}
        date={nasaPics.date}
        url={nasaPics.url}
        explanation={nasaPics.explanation}
    
    />
   );

}

export default PicCard;