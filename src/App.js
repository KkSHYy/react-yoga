import React from 'react'
import Header from './components/Header';
import DisplaySec from './home/DisplaySec';
import Tech from './home/Tech';
import Info from './home/Info';
import Footer from './components/Footer';


const App = () => {

  return (
    <div>
   <Header/>
   <DisplaySec/>
   <Tech/>
   <Info/>
   <Footer/>
    </div>
  )
}

export default App;
