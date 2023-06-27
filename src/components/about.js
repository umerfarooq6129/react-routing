import React from 'react'
import Header from '../nav/header'
import Home from '../assets/contact.jpg'
import './index.css'

const about = () => {
    return (
        <>

            <div className="about" style={{
                backgroundImage: `url(${Home})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh'
            }}>
                {<Header />}
                <div className="content">
                    <h1>What is React Routing</h1>
                    <p>React Routing is the process of managing navigation in React applications. It uses the React Router library, which provides components like <b>Route</b>, <b>BrowseRouter</b>, and <b>Routes</b>. <br /> Routes define URLs and the corresponding components to render. Links are used for navigation, and the Switch component ensures only one route is rendered. Parameters can be used for dynamic routing, and nested routes enable complex layouts. React Routing improves the user experience by allowing seamless navigation between views without page refresh. </p>
                </div>
            </div>
        </>
    )
}

export default about
