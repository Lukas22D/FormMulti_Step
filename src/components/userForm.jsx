import React from 'react'

const userForm = () => {
  return (
    <div> 
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Digite seu nome' required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='Digite seu email' required />
        </div>
    </div>
  )
}

export default userForm