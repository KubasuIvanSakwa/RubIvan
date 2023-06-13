// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from '../public/Home'
import Nav from '../public/Nav'
import SideNav from '../public/SideNav'
import TopNav from '../public/TopNav'
import './App.css'

function App() {
    
  return (
    <>
      <div className="Nav-bar">
        <TopNav />
        <Nav />
      </div>
       <Home />
    </>
  )
}

export default App
