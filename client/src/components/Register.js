import React,{useState} from 'react'

import {Link} from 'react-router-dom'

const Register = () => {
  const [formData,setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const {name,email,password} = formData

  const handleSubmit = () => {

  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div className='card-panel' style={{marginTop: '30px'}} >
      <form style={{width: '400px',margin: 'auto'}} onSubmit={handleSubmit} >
        <div className="row">
          <div className="input-field ">
            <input id='name' type="text" name='name' value={name} onChange={handleChange} />
            <label forHtml='name' >Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field ">
            <input id='email' type="text" name='email' value={email} onChange={handleChange} />
            <label forHtml='email' >Email</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field ">
            <input id='password' type="password" name='password' value={password} onChange={handleChange} />
            <label forHtml='password' >Password</label>
          </div>
        </div>
        <div className="grey-text">
          Already have an account   
          <Link to='/user/login' >  Login</Link>
        </div>

        <button style={{marginTop: '20px'}} type="submit" className="waves-effect waves-light btn teal text-white lighten-2">Register</button>
      </form>
    </div>
  )
}

export default Register
