

import './App.css'
import Footer from './components/Footer'
import Header from './components/header'
import Hero from './components/hero'
import UseState from './UseState'


function App() {
 
  return (
    <>
    {/* header */}
    <Header/>
     <UseState/>
   {/*hero section  */}
   <Hero/>

   {/* footer */}
    <Footer/>
     
    </>
  )
}

export default App