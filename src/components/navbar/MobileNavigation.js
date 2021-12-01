import React from 'react'
import './MobileNavigation.css'
import {Link} from 'react-router-dom';
import SidebarData from '../sidebar/SidebarData';

function MobileNavigation(props) {

   return(


    <div className="mobile-navigation">
        <ul className="mobile-navigation-list">
            {SidebarData.map((item, index) => {
                            return (
                                <li key={index} onClick={() => props.isMobile && props.closeMobileMenu()}>
                                    <Link className="mobile-navigation-list-link" to={item.path} style={{ textDecoration: 'none' }}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        <li>Login/Sign up</li>
         </ul>
   </div>

    )
}

export default MobileNavigation;
