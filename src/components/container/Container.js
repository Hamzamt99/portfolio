import React from 'react'
import Main from '../main/Main'
import NavBar from '../nav/NavBar'
import './style.scss'
import Footer from '../footer/Footer'
export default function Container() {
    return (
        <div className='big-Div'>
            <NavBar />
            <Main />
            <Footer/>
            
        </div>
    )
}
