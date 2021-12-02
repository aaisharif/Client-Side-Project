import { useState } from "react";

const NewArtistForm = ({onArtistSubmission}) => {

    const [name, setName] = useState("");
    const [nationality, setNationality] = useState("");
    const [biggestHit, setBiggestHit] = useState("");
    

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleNationalityChange = (event) => {
        setNationality(event.target.value);
    }

    const handleBiggestHitChange = (event) => {
        setBiggestHit(event.target.value);
    }

    const handleFormSubmission = (event) => {
        
        console.log("submitting form")
        event.preventDefault();

        const newArtists = {
            artist_name: name,
            nationality: nationality,
            biggest_hit: biggestHit
        }

        onArtistSubmission(newArtists);

        
        setName("");
        setNationality("");
        setBiggestHit("");

    }

    return(
        <>
        <h2>Add a new Artist:</h2>
        <form onSubmit={handleFormSubmission}>
            <div className="formElement">
                <label htmlFor="name">Artist Name: </label>
                <input type="text" id="name" value={name} onChange={handleNameChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="Nationality">Nationality: </label>
                <input type="text" id="nationality" value={nationality} onChange={handleNationalityChange}/>
            </div>
            <div className="formElement">
                <label htmlFor="BiggestHit">BiggestHit: </label>
                <input type="text" id="biggestHit" value={biggestHit} onChange={handleBiggestHitChange}/>
            </div>
            <div className="formElement">
                {/* <input type="submit" value="Add Artist"/> */}
                <button type="submit" class="button-64" role="button"><span class="text">Add Artist</span></button>

            </div>
        </form>
    </>
    )

}

export default NewArtistForm;