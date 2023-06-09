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
                    <h2>Database Design and Management</h2>
                    <p> I can assist in designing and implementing the database architecture for your application. This involves selecting an appropriate database management system
                    (such as PostgreSQL) and creating efficient database schemas.</p>
                </div>
                <div className='card'>
                    <h2>Web Application Development</h2>
                    <p> I can develop custom web applications from scratch using various technologies and frameworks such as React.js
                        ,Node.js.
                        I will ensure the application is scalable, responsive, and meets your specific requirements.
                    </p>
                </div>
            </div>
            <div className='cardRow'>
                <div className='card'>
                    <h2>Front-end Development</h2>
                    <p>I can create engaging and user-friendly interfaces using HTML, CSS, and JavaScript. I will focus on delivering a seamless user experience and ensure compatibility across different browsers and devices.
                    </p>
                </div>
                <div className='card'>
                    <h2>Back-end Development</h2>
                    <p> I can build the server-side logic and database integration for your web application
                    I will implement secure authentication, data storage, and efficient APIs to support your application's functionality.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
