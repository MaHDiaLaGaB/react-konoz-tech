import React from 'react'
import Header from "../components/Header"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import GoogleMap from "../components/GoogleMaps.jsx";

function Home() {
  return (
    <>
     <Header/> 
     <Skills/> 
     <Projects/>
     <Contact/>
    {/*<GoogleMap/>*/}
     <Footer/>
    </>
  )
}

export default Home