
import React, { useState } from 'react'
import HomePage from './HomePage'
import ResumeForm from './ResumeForm'
import Resume from './Resume'

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'



const App = () => {

  const [formData , setFormData] = useState({})

  console.log(formData);
  
  

  return (
    <div>
      <Router>
         <Routes>
           <Route  path='/'   element={ <HomePage/>}     />
           <Route  path='/form'   element={ <ResumeForm setFormData={setFormData} />}     />
           <Route  path='/resume'   element={ <Resume formData={formData}/>}     />
         </Routes>
         

      </Router>

   

    </div>
  )
}

export default App