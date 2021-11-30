import { useState, useEffect } from "react";
import ArtistList from "../components/artists/ArtistList";
import NewArtistForm from "../components/admin/NewArtistForm";
import Navbar from "../components/navbar/Navbar";

const ArtistContainer = () => {

    const [artists, setArtists] = useState([])
    const [filter, setFilter] = useState('')


    const handleType = (e) => {
        setFilter(e.target.value)
    }

    const getArtistData = () => {
        fetch("http://localhost:8080/api/v1/artists")
        .then(resp=>resp.json())
        .then(data =>  setArtists(data))
        }
   

    useEffect (getArtistData, []);

    const addNewArtist = (newArtist) => {
        
        fetch("http://localhost:8080/api/v1/artists/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newArtist)
        })
            .then(getArtistData);
    }

    const updateArtistById = (id) => {
        console.log("updating artist" + id);
        const artistToUpdate = artists.find(artist => artist.id === id)
        artistToUpdate.completed = true;

        fetch(`http://localhost:8080/api/v1/artists/${id}`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(artistToUpdate)
        })
            .then(getArtistData);
    }

    const deleteArtistById = (id) => {
        console.log("deleting artist" + id);
        const artistToDelete = artists.find(artist => artist.id === id)
        //artistToDeleted.completed = true;

        fetch(`http://localhost:8080/api/v1/artists/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(artistToDelete)
        })
            .then(getArtistData);
    }

    const searchArtist = (artists) => {
        return artists.filter(artist => artist.artist_name.toLowerCase().indexOf(filter.toLowerCase().trim()) > -1); 
    }

    return (
        artists.length > 0 ?

        <div>

             <Navbar handleType={handleType} filter={filter}/>
             <ArtistList artists={searchArtist(artists)} onUpdateArtistById={updateArtistById} onDeleteArtistById={deleteArtistById}/>
             {/* <NewArtistForm onArtistSubmission={addNewArtist}/>    */}
            <ArtistList artists={artists} onUpdateArtistById={updateArtistById} onDeleteArtistById={deleteArtistById}/>

            
        </div>
        :
        <p>Loading...</p>
    )
}

export default ArtistContainer;
