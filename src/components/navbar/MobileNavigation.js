import React from 'react'
import './MobileNavigation.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
// import SongContainer from './containers/SongContainer'
// import AdminContainer from './components/admin/AdminContainer';
import AlbumContainer from '../../containers/AlbumContainer';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarData from '../sidebar/SidebarData';

function MobileNavigation(props) {

   return(


    <div className="mobile-navigation">
        <ul className="mobile-navigation-list">
     {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path} style={{ textDecoration: 'none' }}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
         </ul>
   </div>

    // return (
    //     <div className="mobile-navigation">
    //         <Router>
    //             <Switch>
    //                 {/* <ul className="mobile-navigation-list">
    //                     <li onClick={() => props.isMobile && props.closeMobileMenu()}><Route path='/' exact component={AlbumContainer} /></li>
    //                     <li onClick={() => props.isMobile && props.closeMobileMenu()}>Artists</li>
    //                     <li onClick={() => props.isMobile && props.closeMobileMenu()}>Songs</li>
    //                     <li onClick={() => props.isMobile && props.closeMobileMenu()}>Playlist</li>
    //                     <li onClick={() => props.isMobile && props.closeMobileMenu()}>Admin</li>
    //                 </ul> */}

    //             })}


                   
    //             </Switch>
    //         </Router>
    //     </div>
    )
}

export default MobileNavigation;
