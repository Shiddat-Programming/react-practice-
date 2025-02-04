import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useResume } from './ResumeProvider';




const ResumeForm = () => {
    const { setFormData } = useResume();
    const navigate = useNavigate();

    const [ form , setForm ] = useState({
        name : '',
        email : '',
        phone : '',
        address : ''
    })

  
const handleChange = ((e)=>{

    setForm({
        ...form, [e.target.name] : e.target.value
    
    })
    
})





const handleSubmit = ((e)=>{
   e.preventDefault() // to prevent the default behaviour of the form that is to refresh the page when the form is submitted
   setFormData(form)
   console.log(form);
   
    
    navigate('/resume')
})


  return (
    <div>


        

        <form onSubmit={handleSubmit}>

            <label htmlFor="">
                Name:
                <input 
                type="text"
                name='name' 
                value={form.name}
                onChange={handleChange}
                />
                
            </label>

  <br /> 
            <label htmlFor="">
                Email id :
                <input 
                type="email" 
                name='email'
                value={form.email}
                onChange={handleChange}


                />
            </label>

    <br />
            <label htmlFor="">
                Phone No :
                <input 
                type="number" 
                name='phone'
                value={form.phone}
                onChange={handleChange}

                
                />
                

            </label>

<br />

            <label htmlFor="">
                Address :
                <textarea 
                name="address" 
                value={form.address}
                onChange={handleChange}
                >

                </textarea>
            </label>


 <br /> <br /> 
  <button type='submit'>  submit </button>


        </form>




    
    </div>
  )
}

export default ResumeForm