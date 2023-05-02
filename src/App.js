import React from 'react'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App