import React from 'react'
import { useResume } from './ResumeProvider'




const About = () => {
    const { formData } = useResume();
  return (
    <div>About


<h1> my name is  {formData.name}</h1>

    </div>



  )
}

export default About