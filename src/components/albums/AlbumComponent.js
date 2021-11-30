import React from 'react'
import {useState} from 'react'
import placeholder from '../../placeholder/albumplaceholder.jpeg'
import { BsTrash, BsFillTrashFill, BsHeart, BsHeartFill } from "react-icons/bs";

const AlbumComponent= ({album}) => {

    const [modeHeart, setModeHeart] = useState(false); 
    // const [modeTrash, setModeTrash] = useState(false); 

    const handleOnClick = () => {
         setModeHeart(!modeHeart);  
    }

//     const handleOnClick2 = () => {
//         setModeTrash(!modeTrash);  
//    }

    

    return(
        <>
        <div className= "component">
            <img src = {placeholder} alt={album.name}/>
            <h4>Album Name:</h4>
            <p>{album.album_name}</p>
            {/* <h4>Artist ID:</h4>
            <p>{album.artist_id}</p> */}
            <h4>Genre:</h4>
            <p>{album.genre}</p>
            {/* <h4>Release date:</h4>
            <p>{album.release_date}</p>
            <h4>Number of Tracks:</h4>
            <p>{album.number_of_tracks}</p> */}
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
                        (<BsHeartFill size={28} color={'hotpink'} onClick={handleOnClick }/>)
                        :
                        (<BsHeart size={28} onClick={handleOnClick }/>)
                        }
            </div>
            </div>
            
        </div>
        <div>
            
        </div>
       </>

    )

}

export default AlbumComponent;
