
import React, { useState } from 'react'
import HomePage from './HomePage'
import ResumeForm from './ResumeForm'
import Resume from './Resume'

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import ResumeProvider from './ResumeProvider'
import About from './About'



const App = () => {





  
  

  return (
    <div>


      <ResumeProvider>   
      <Router>
         <Routes>
           <Route  path='/'  element={ <HomePage />}     />
           <Route  path='/form'   element={ <ResumeForm/> } />   
           <Route  path='/resume'   element={ <Resume />}     />
          

         </Routes>

         <About/>

      </Router>
      </ResumeProvider>

   

    </div>
  )
}

export default App