import React from 'react'
import './MobileNavigation.css'

function MobileNavigation(props) {
    return (
        <div className="mobile-navigation">
            <ul className="mobile-navigation-list">
                <li onClick={()=> props.isMobile && props.closeMobileMenu()}>Home</li>
                <li onClick={()=> props.isMobile && props.closeMobileMenu()}>Artists</li>
                <li onClick={()=> props.isMobile && props.closeMobileMenu()}>Songs</li>
                <li onClick={()=> props.isMobile && props.closeMobileMenu()}>Playlist</li>
                <li onClick={()=> props.isMobile && props.closeMobileMenu()}>Admin</li>
            </ul>
        </div>
    )
}

export default MobileNavigation
