import React from 'react'
// import Login from './Login'
// import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
// import Githubprofiles from './Githubprofiles'
function Home() {
  return (
    <div>
        <Navbar/>
        <h1 style={{textAlign:"center"}}>Github profiles are Displayed</h1>
        {/* <Login></Login> */}
    </div>
  )
}

export default Home
