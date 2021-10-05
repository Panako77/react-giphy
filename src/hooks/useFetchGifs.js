import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


       /**
     * el use effect hace que el componente se ejecute solo una vez
     */
    useEffect( () => {
        getGifs( category )
        .then( (gifs) => {

            setTimeout(() => {
                setState({ 
                    data: gifs,
                    loading: false 
                })
            }, 3000);

        })

        // cuando el elemento recibido es usado en una unica funcion se puede resumir asi:
        // .catch( err => console.log());
    }, [ category]);




    return state; //{ data: [], loading: true}
} 
