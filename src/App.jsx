import React  from 'react'
import Navbar from './Conposants/Navbar'
import Hero from './Conposants/Hero'
import Contact from './Conposants/Contact'
import Footer from './Conposants/Footer'
import Service from './Conposants/Service'
import About from './Conposants/About'




const App = () => {
 
  return (
      
      <div >
            <Navbar/>
            <div className=''>
                <Hero/>
                <About/>
                <Service/>
                <Contact/>
            </div>
            
            <Footer/>
      </div>
     
  )
}

export default App