import { Button} from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userLoad, userAuth } from '../../Action/user';
import { Link } from "react-router-dom";
import axios from 'axios'
import "./Register.css"

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandel = async (e) => {
    e.preventDefault();
    const {data}=await axios.post("https://todo-backend-66o7.onrender.com/api/register",{name,email,password});
    console.log(data)
    localStorage.setItem("token",data.token);
    await dispatch(userLoad(data.token));
    dispatch(userAuth(data.token))
    setEmail("");
    setName("");
    setPassword("");


  }

  return (
    <div >
      <form onSubmit={submitHandel} className="formClass">
        <input className='formItem' type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input className='formItem' type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='formItem' type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button className='formItem' variant="contained" type='submit'>Register</Button>
        <Link className='formItem link' to={"/"}>login</Link>
      </form>
    </div>
  )
}

export default Register;