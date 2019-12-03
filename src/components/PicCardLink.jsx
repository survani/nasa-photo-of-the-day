import React from "react";

const PicCardLink = props => {

   return (
<React.Fragment>
<div className='ContentContainer'>
   <section className='image-container'>
   <img src={props.url} className='pic-day' alt='Pictures' height='250px' width='250px' />
   </section>
   <section className='img-info'>
      <h2>{props.title}</h2>
      <h3>Day: {props.date}</h3>
      <p>{props.explanation}</p>
   </section>
</div>
</React.Fragment>

   );

}

export default PicCardLink;