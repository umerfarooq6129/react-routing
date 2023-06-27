import React from 'react'
import Header from '../nav/header'
import Code from '../assets/contact.jpg'
import './index.css'

const code = () => {
    return (
        <>
            <div className="code" style={{
                backgroundImage: `url(${Code})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh'
            }}>
            {<Header />}
                <div className="content">
                    <h1>React Routing Code</h1> <br />
                    <img src='img/code.png' alt=""  width='100%' height='400px'/>
                </div>
            </div>
        </>
    )
}

export default code
