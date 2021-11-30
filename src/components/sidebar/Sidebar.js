import React, {useState} from 'react'
import SidebarData from './SidebarData';
import { Link } from 'react-router-dom';
import './Sidebar.css';


function Sidebar() {

    // const [sidebar, setSidebar] = useState(false);
    // const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="sidebar">
            <ul className="sidebar-menu-items">
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
    )
}

export default Sidebar;
