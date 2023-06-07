import React from 'react'
import Footer from '../footer/Footer'
import './style.scss'
export default function Services() {
    return (
        <div className='parent' id='services'>
            <div className='header'>
            <h1>Services</h1>
            <p>I offer a range of services to help businesses and individuals establish a strong online presence and create functional and visually appealing websites</p>
            </div>
            <div className='cardRow'>
                <div className='card'>
                    <h1>Web Design</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                <div className='card'>
                    <h1>Web Development</h1>
                    <p> I specialize in building websites from scratch or revamping existing ones. I use the latest web technologies and frameworks to create responsive, user-friendly, and scalable websites that align with your brand's identity and objectives.</p>
                </div>
            </div>
            <div className='cardRow'>
                <div className='card'>
                    <h1>UI/UX Design</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                <div className='card'>
                    <h1>Security</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
