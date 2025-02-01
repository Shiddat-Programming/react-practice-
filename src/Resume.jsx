import React from 'react'

const Resume = ({formData}) => {
  return (
    <div>


        <h1> my name is {formData.name}</h1>
        <h1> my email id  is  {formData.email}</h1>
        <h1> my email id  is  {formData.phone}</h1>
        <h1> my email id  is  {formData.address}</h1>
    </div>
  )
}

export default Resume