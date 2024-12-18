import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className='form w-25 mx-auto bg-info p-4 rounded mt-5'>
        <h2 className='text-center my-4'>Signup</h2>
     <div  className='text-center'>
     <img src="image/img.jpg" alt="" className='rounded-circle'  style={{width:"80px" , height:"80px"}}/>
     </div>
        {/* form */}
        {/* new changes */}
        <form className=''>
       
       <div className="form-group ">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control"  id="name" placeholder="Enter name" />
       </div>
       <div className="form-group my-3">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-control" id="password" placeholder="Enter password" />
 
       </div>
       <button type="submit" className="btn btn-primary my-3">Submit</button>
        </form>

      
    </div>
  )
}

export default Signup
