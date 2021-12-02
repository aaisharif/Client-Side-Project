import React from 'react'

const BirdViewer = ({bird}) => {
    return (
        <div>
            <img src = {bird.message} alt = "bird"/>
        </div>
    )
}
//bird.picture.medium
export default BirdViewer
