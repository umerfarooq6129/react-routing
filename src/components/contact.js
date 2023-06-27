import React from 'react'
import Header from '../nav/header'
import Contact from '../assets/contact.jpg'
import './index.css'

const contact = () => {
    return (
        <>
            <div className="contact" style={{
                backgroundImage: `url(${Contact})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh'
            }}>
            {<Header />}
                <div className="content">
                    <h1>Contact Us</h1>
                    <p> Email : umer.uze@gmail.com</p>
                
                </div>
            </div>
        </>
    )
}

export default contact
