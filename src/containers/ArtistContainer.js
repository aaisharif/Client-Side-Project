import { useState, useEffect } from "react";
import ArtistList from "../components/artists/ArtistList";

function ArtistContainer() {

    const [artists, setArtists] = useState([])


    const getArtistData = () => {
        fetch("http://localhost:8080/api/v1/artists")
        .then(resp=>resp.json())
        .then(data =>  setArtists(data))
        }
   

    useEffect (getArtistData, []);

    // const searchArtist = () => {
    //     return artists.filter(artist => artist.name.toLowerCase().indexOf() > -1); 
    // }



    return (
        <div>
            <ArtistList artists={artists} />
        </div>
    )
}

export default ArtistContainer
