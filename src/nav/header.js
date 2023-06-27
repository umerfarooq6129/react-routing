import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const header = () => {
  return (
    <>
        <section className="header" >
            <div className="container">
                <div className="head">
                    <div className="row">
                        <div className="col-ml-4">
                            <img src="img/logo.png" alt="" />
                        </div>
                        <div className="col-ml-8 nav">
                            <ul>
                                <NavLink to={'/'}>Home</NavLink>
                                <NavLink to={'/about'}>About</NavLink>
                                <NavLink to={'/code'}>Code</NavLink>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default header
