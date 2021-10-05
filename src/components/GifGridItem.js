import React from 'react';
import 'animate.css';

// export const GifGridItem = ( {id, title, img} ) => {
export const GifGridItem = ( { id, title,img  } ) => {

 
    return (
        <div className='card animate__animated animate__fadeIn animate__slow'>
           <img src={img} alt={title} />
           <p> { title } </p>
        </div>
    )
}
