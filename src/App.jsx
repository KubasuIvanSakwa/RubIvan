import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../public/Home'
import Nav from '../public/Nav'
import TopNav from '../public/TopNav'
import Userdashboard from '../public/Userdashboard'
import Content from '../public/Content';
import Layout from '../public/Layout'
import Latest from '../public/Latest'
import './App.css'
import Categories from '../public/Categories'

function App() {
    
  return (
    <BrowserRouter>
      <div className="Nav-bar">
        <TopNav />
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
            <Home />
            <Categories />
            <Content />
            </>}
          />
          
          <Route path="/dashboard" element={<Userdashboard />}/>
          <Route path="/latest" element={<Latest />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
