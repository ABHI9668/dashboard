import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
   const[openbar,setopenbar]=useState(false);

   const openSidebar =()=>{
    setopenbar(!openbar)
   }

  return (
   <div className='grid-container'>
      <Header openSidebar={openSidebar}/>
      <Sidebar openbar={openbar} openSidebar={openSidebar}/>
      <Home/>
   </div>
  )
}

export default App
