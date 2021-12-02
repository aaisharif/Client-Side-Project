import React from 'react'
import AlbumComponent from "./AlbumComponent"
import './Album.css'
import pinkChicken from './chickens/pink-chicken.PNG'
import blueChicken from './chickens/blue-chicken.PNG'
import yellowChicken from './chickens/yellow-chicken.PNG'
import greenChicken from './chickens/green-chicken.PNG'


const AlbumList = ({ albums }) => {

    const albumComponents = albums.map(album => {

        return (
            <AlbumComponent album={album} key={album.id} />
        )
    })

    const funkyYellowChicken = () => {
        const moon = document.querySelector('.yellowChicken')
        const navbar = document.querySelector('.navbar-container-bckg-dark')
        const sidebar = document.querySelector('.sidebar')
        const list = document.querySelector('.list')
        const component = document.querySelectorAll('.component')

        moon.addEventListener('click', () => {
            document.body.classList.toggle('yellow-theme')
            navbar.classList.toggle('yellow-theme')
            sidebar.classList.toggle('yellow-theme')
            list.classList.toggle('yellow-theme')

            component.forEach((c) => {
                c.classList.toggle('yellow-theme')
            })
        })
    }

    const funkyGreenChicken = () => {
        const moon = document.querySelector('.greenChicken')
        const navbar = document.querySelector('.navbar-container-bckg-dark')
        const sidebar = document.querySelector('.sidebar')
        const list = document.querySelector('.list')
        const component = document.querySelectorAll('.component')

        moon.addEventListener('click', () => {
            document.body.classList.toggle('green-theme')
            navbar.classList.toggle('green-theme')
            sidebar.classList.toggle('green-theme')
            list.classList.toggle('green-theme')

            component.forEach((c) => {
                c.classList.toggle('green-theme')
            })
        })
    }

    const funkyPinkChicken = () => {
        const moon = document.querySelector('.pinkChicken')
        const navbar = document.querySelector('.navbar-container-bckg-dark')
        const sidebar = document.querySelector('.sidebar')
        const list = document.querySelector('.list')
        const component = document.querySelectorAll('.component')

        moon.addEventListener('click', () => {
            document.body.classList.toggle('pink-theme')
            navbar.classList.toggle('pink-theme')
            sidebar.classList.toggle('pink-theme')
            list.classList.toggle('pink-theme')

            component.forEach((c) => {
                c.classList.toggle('pink-theme')
            })
        })
    }

    const funkyBlueChicken = () => {
        const moon = document.querySelector('.blueChicken')
        const navbar = document.querySelector('.navbar-container-bckg-dark')
        const sidebar = document.querySelector('.sidebar')
        const list = document.querySelector('.list')
        const component = document.querySelectorAll('.component')

        moon.addEventListener('click', () => {
            document.body.classList.toggle('blue-theme')
            navbar.classList.toggle('blue-theme')
            sidebar.classList.toggle('blue-theme')
            list.classList.toggle('blue-theme')

            component.forEach((c) => {
                c.classList.toggle('blue-theme')
            })
        })
    }

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
                            <img src={yellowChicken} alt={"yellow Chicken"} onClick={() => funkyYellowChicken()}/>
                        </div>

                        <div className="greenChicken" >
                            <img src={greenChicken} alt={"Green Chicken"} onClick={() => funkyGreenChicken()}/>
                        </div>

                        <div className="pinkChicken" >
                            <img src={pinkChicken} alt={"Pink Chicken"} onClick={() => funkyPinkChicken()}/>
                        </div>

                        <div className="blueChicken" >
                            <img src={blueChicken} alt={"Blue Chicken"} onClick={() => funkyBlueChicken()}/>
                        </div>

                    </div>

                </div>

                <div className="buttons">
                    <button class="button-signup" role="button"><span class="text">Sign Up</span></button>
                    <button class="button-login" role="button"><span class="text">Login</span></button>
                </div>


            </div>

            <div className="ribbon-container">
            <h1 class="ribbon">
                <strong class="ribbon-content">UK HOT ALBUMS FOR YOUR CLUCKET-LIST! ONLY FOR CHICKENS</strong>
            </h1>
            </div>    

            <div className="list">
                {albumComponents}
            </div>
        </>
    )


}

export default AlbumList;