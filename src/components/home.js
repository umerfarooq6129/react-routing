import React from 'react'
import Header from '../nav/header'
import Home from '../assets/contact.jpg'
import './index.css'

const home = () => {
    return (
        <>
            
            <div className="home" style={{
                backgroundImage: `url(${Home})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh'
            }}>
            {<Header />}
                <div className="content">
                    <h1>Welcome to umerfarooq6129 Github</h1>
                    <p>In this Section we working on React Routing</p>
                </div>
            </div>
        </>
    )
}

export default home 
