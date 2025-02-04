import React from 'react'

import { useNavigate } from 'react-router-dom'


const HomePage = ({formData}) => {
    const navigate = useNavigate();
   
    

  return (
    <div>
        <h1> Welocme </h1>

       
        <button onClick={()=>{navigate('/form')}}> Start Building </button>


        
    </div>
  )
}

export default HomePage