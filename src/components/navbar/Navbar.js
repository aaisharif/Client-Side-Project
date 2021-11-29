import React from 'react'

function Navbar() {
    return (
        <section className="navbar-container">
            <div className="navbar">
                <div className="navbar-logo">

                </div>
                <div className="navbar-right">
                    <div className="navbar-search">
                        <input type="search"/>
                    </div>
                    <div className="navbar-toggle">
                        <button>Light/Dark</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar
