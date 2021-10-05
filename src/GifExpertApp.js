import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['Dragon Ball', 'Arale', 'Samurai X'];

    const [categories, setCategories] = useState(['Dragon Ball', 'Arale', 'Samurai X']);
    // const [categories, setCategories] = useState(['Dr Slump']);

    // const handleAdd = () => {
    //     // setCategories( (oldArray) => [...oldArray, 'Arale']);
    //     setCategories( (oldArray) => ['Arale',...oldArray]);
    // }

    return (
        <>
            <h2> GifExpertApp </h2>
            {/* <AddCategory /> */}
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( (category, i )  => {
                        // return (<li key={category}> {category} </li>);
                        return <GifGrid 
                                    key={ category}    
                                    category={ category} 
                                />
                    })
                }
            </ol>
            
        </>
    );
}

export default GifExpertApp;