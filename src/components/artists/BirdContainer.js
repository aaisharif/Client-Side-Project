import React from 'react'
import { useState, useEffect } from "react";
import BirdViewer from "./BirdViewer";
// import NewDogButton from "../components/NewDogButton";


const BirdContainer = () => {

    const [bird, setBird] = useState(null);

    const updateBirdData = () => {
         fetch("https://dog.ceo/api/breeds/image/random")
        // fetch("https://randomuser.me/")
            .then(response => response.json())
            .then(data => setBird(data))
    }

    useEffect ( updateBirdData, []);

    return (

        bird ?

        <div className="artist-image">
            <BirdViewer bird={bird} />
        </div>

        :

        <p>Loading Artist Photo...</p>
    )
}

export default BirdContainer
