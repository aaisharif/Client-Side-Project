import React from 'react'
import {useState} from 'react'
import placeholder from '../../placeholder/artistplaceholder.jpeg'
import { BsTrash, BsFillTrashFill, BsHeart, BsHeartFill } from "react-icons/bs";


const ArtistComponent= ({artist}) => {

    const [modeHeart, setModeHeart] = useState(false);

    const handleOnClick = () => {
        setModeHeart(!modeHeart);  
   }

    return(
        <div className= "component">
            
            <img src = {placeholder} alt={artist.name}/>

            <div className="name">
            <h4>Name:</h4>
            <p>{artist.artist_name}</p>
            </div>
            {/* <h4>Nationality:</h4>
            <p>{artist.nationality}</p> */}
            <h4>Biggest Hit:</h4>
            <p>{artist.biggest_hit}</p>
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
                        (<BsHeartFill size={28}  color={'hotpink'} onClick={handleOnClick }/>)
                        :
                        (<BsHeart size={28} onClick={handleOnClick }/>)
                        }
            </div>
            </div>

        </div>
    )

}

export default ArtistComponent;
