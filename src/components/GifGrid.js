import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import 'animate.css';



export const GifGrid = ( { category }) => {

    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs( category );

    // useEffect()  movido al hook personalizado useFetchHook()
  



    return (
                // <div> { count } </div>
                // <button onClick={ () => setCount( count + 1 ) }> ADD </button>
        <>
            <h3> { category } </h3>

            {loading && <p className='animate__animated animate__flash animate__infinite'> Cargando... </p>}


            <div className="card-grid">
                
                {
                    images.map( img => {                    
                    // {images.map(( {id, title, img} ) => {                    
                        // return <li key={id}> {title} </li>
                        return <GifGridItem
                                    key={img.id} 
                                    
                                    // con el operador spread mandamos la desestructuracion de las propiedades del objeto
                                    
                                    {...img}
                                />
                    })
                }
                
            </div>        
        </>
    )
}
