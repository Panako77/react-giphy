


    export const getGifs = async( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=837Un2vAdD5xj4r5bnKj0DmYkMTdFjwi`;
        const resp = await fetch( url);
        const { data } = await resp.json();
        /**
         * para recoger los datos que necesitamos en objetos mapeamos 'map()'
         *  la respuesta que nos da la data en una nueva 'const'
         */
        const gifs = data.map( (img) => {
            return{
                id: img.id,
                title: img.title,
                // con el '?' preguntamos si está para que lo use
                img: img.images?.downsized_medium.url,
            }

        })

        // console.log( gifs);
        // setImages( gifs);
        return gifs;
    }

