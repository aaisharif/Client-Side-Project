import React from 'react'
import {useState} from 'react'
import placeholder from '../../placeholder/songplaceholder.jpeg'
import { BsTrash, BsFillTrashFill, BsHeart, BsHeartFill } from "react-icons/bs";


const SongComponent= ({song, favourited}) => {

    const [modeHeart, setModeHeart] = useState(false);
    const [favourites, setFavourites] = useState([]);


    const addFavouriteSong = (song) =>{
        const newFavouritesList = [...favourites, song]; 
        setFavourites(newFavouritesList);
        setModeHeart(!modeHeart);  
    }


//     const handleOnClick = () => {
//         setModeHeart(!modeHeart);  
//    }

   console.log(favourites)

    return(
        <div className= "component">

            <img src = {placeholder} alt={song.name}/>    
            <h4>Name:</h4>
            <p>{song.song_name}</p>
            <h4>Genre:</h4>
            <p>{song.genre}</p>
            {/* <h4>Duration:</h4>
            <p>{song.duration}</p>
            <h4>Artist ID:</h4>
            <p>{song.artist_id}</p>
            <h4>Album ID:</h4>
            <p>{song.album_id}</p>
            <h4>Release date:</h4>
            <p>{song.release_date}</p>
            <h4>Languages:</h4>
            <p>{song.languages}</p>
            <h4>Platform:</h4>
            <p>{song.platform}</p> */}
             <div className="heart-container">
            {/* <div className="float-icon">
                        { modeTrash ? 
                            (<BsFillTrashFill onClick={handleOnClick2 }/>)
                            :
                            (<BsTrash onClick={handleOnClick2 }/>)
                        }
            </div> */}
            <div className="float-icon">
                        { modeHeart ? 
                        (<BsHeartFill size={28}  color={'hotpink'} onClick={() => addFavouriteSong()}/>)
                        :
                        (<BsHeart size={28} onClick={() => addFavouriteSong()}/>)
                        }
            </div>
            </div>

        </div>
    )

}

export default SongComponent;
