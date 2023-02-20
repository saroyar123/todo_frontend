import React from 'react'
import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { useState } from 'react'
import { useDispatch} from 'react-redux';
import {userAuth, userLoad } from '../../Action/user';
import "./Login.css"
import axios from 'axios';
import { useCookies } from 'react-cookie';

export const Login = () => {

  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cookie,setCookie]=useCookies(['token']);
  const dispatch = useDispatch();
  const submitHandlar = async (e) => {
    e.preventDefault();
    // dispatch(userLogin(email, password));

    const {data}= await axios.post("https://todo-backend-66o7.onrender.com/api/login", { email, password });
    setCookie('token',data.Token,{path:"/"});
    console.log(cookie)
    console.log(cookie)
    await dispatch( userLoad());
    dispatch(userAuth());
   
  }

 

  

  
  // console.log(document)

  return (
    <div>
      <form onSubmit={submitHandlar} className="formClass">
        <input type="text" placeholder='email' value={email} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type='submit' className='button' variant="contained">login</Button>
        <Link to={"/register"} className="link"><Typography>create user</Typography></Link>
      </form>

    </div>
  )
}
