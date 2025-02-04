import React, { createContext, useContext, useState } from 'react'



const ResumeContext = createContext();


const ResumeProvider = ({ children }) => {

const [ formData , setFormData ] = useState({})



  return (  
  
   <ResumeContext.Provider value={{formData , setFormData}}>

   {children}

   </ResumeContext.Provider>


  
  )
}



// Step 3: Custom hook for easy access
export const useResume = () => {
    return useContext(ResumeContext);
  };
  


export default ResumeProvider
