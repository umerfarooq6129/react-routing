import React from 'react'
import {BrowserRouter, Route,Routes,} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Code from './components/code';
import Contact from './components/contact';
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/code' element={<Code />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
