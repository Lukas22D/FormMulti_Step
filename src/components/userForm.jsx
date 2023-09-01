import React from 'react'

const userForm = ({data, updateFieldHandler}) => {
  return (
    <div> 
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Digite seu nome' value ={data.name || ""} onChange={(e) => updateFieldHandler("name", e.target.value)}required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='Digite seu email' value ={data.email || ""} onChange={(e) => updateFieldHandler("email", e.target.value)} required />
        </div>
    </div>
  )
}

export default userForm