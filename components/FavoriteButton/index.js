import {useState} from 'react';

export default function FavoriteButton(){
    const [favorite, setFavorite] = useState(false);
   
    console.log(favorite);

    return(
        <>
        <button onClick={() => setFavorite(!favorite)}>Love it!</button>
        </>
    
    )


