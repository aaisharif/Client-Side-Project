import React from 'react'
import AlbumComponent from "./AlbumComponent"
import './Album.css'
import pinkChicken from './chickens/pink-chicken.PNG'
import blueChicken from './chickens/blue-chicken.PNG'
import yellowChicken from './chickens/yellow-chicken.PNG'
import greenChicken from './chickens/green-chicken.PNG'
import forChickens from './chickens/forchickens.png'

const AlbumList = ({ albums }) => {

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=de43b3ce734a46a1a0c1b276564fcd50&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

    const clientId = 'de43b3ce734a46a1a0c1b276564fcd50';
    const clientSecret = '32d35be5727f4d69b15fcdd24accc117';

    const getToken = () => {
        
        fetch("https://accounts.spotify,com/api.token", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        })
            .then(res=> res.json()).then(data=>data.access_tokem)

    }

console.log(getToken)




    const albumComponents = albums.map(album => {

        return (
            <AlbumComponent album={album} key={album.id} />
        )
    })

    return (

        <>
            <div className="home-page">

                {/* <div className="for-chickens" >
                    <img src={forChickens} alt={"for chickens"} />
                </div> */}

                <div className="heading">
                    <h1 className="h1-1">LISTEN TO MUSIC</h1>
                    <h1 className="h1-2">AND ENJOY WHAT YOU LOVE</h1>
                </div>
                <div class="muzieknootjes">
                    <div class="noot-1">
                        &#9835; &#9833;
                    </div>
                    <div class="noot-2">
                        &#9833;
                    </div>
                    <div class="noot-3">
                        &#9839; &#9834;
                    </div>
                    <div class="noot-4">
                        &#9834;
                    </div>
                </div>


                <div classname="chickens-position">

                    <div className="chickens-grid">

                        <div className="yellowChicken" >
                            <img src={yellowChicken} alt={"yellow Chicken"} />
                        </div>

                        <div className="greenChicken" >
                            <img src={greenChicken} alt={"Green Chicken"} />
                        </div>

                        <div className="pinkChicken" >
                            <img src={pinkChicken} alt={"Pink Chicken"} />
                        </div>

                        <div className="blueChicken" >
                            <img src={blueChicken} alt={"Blue Chicken"} />
                        </div>

                    </div>

                </div>

                <div className="buttons">
                    <button class="button-signup" role="button"><span class="text">Sign Up</span></button>
                    <button class="button-login" role="button"><span class="text">Login</span></button>
                </div>

            </div>
            <div className="list">
                {albumComponents}
            </div>
        </>
    )


}

export default AlbumList;