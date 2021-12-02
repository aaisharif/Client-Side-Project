import React from 'react'

function Login() {

    const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=b512eb797d5b406591a6869217308698&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

    return (
        <div> 
            <a href={AUTH_URL}>
                Login with Spotify
            </a>
        </div>
    )
}

export default Login
