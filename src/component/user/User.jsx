import React from 'react'
import './User.css'
import {Avatar, Button} from "@mui/material"
import { Task } from '../task/Task'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, deleteUser, logOutUser, unAuth, userLoad } from '../../Action/user'
import { useState } from 'react'
import "./User.css"

export const User = () => {

  const dispatch=useDispatch();

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  // console.log(useSelector((state)=>state.loadUser))

  
  const submithandlar=async(e)=>{
    e.preventDefault();
    const token=localStorage.getItem("token");
    console.log(token);
    
    await dispatch(addTask(title,description,token));
    dispatch(userLoad(token));
    setTitle("");
    setDescription("");
  }

  const logoutHandlar=async(e)=>{
    // e.preventDefault();

    let token=localStorage.getItem("token");
    console.log(token);
    localStorage.removeItem("token");
    token=null;
    await dispatch(logOutUser(token));
    await  dispatch(userLoad(token));
    dispatch(unAuth());
   
    
    }

  const deleteAccountHandlar=async(e)=>{
    e.preventDefault();

    const token=localStorage.getItem("token");
    console.log(token);
    localStorage.removeItem("token");
    await dispatch(deleteUser(token));
    await dispatch(userLoad(token));
    dispatch(unAuth(token));
    
    

  }
  const {name}=useSelector((state)=>state.loadUser.user);
  const {todolist}=useSelector((state)=>state.loadUser.user)

  
  


  return (
    <div className='user'>
        <div className='header'>
          <Avatar/>
          <h1>{name}</h1>
        </div>
        <div className='taskCreate'>
          <form className='task' onSubmit={submithandlar}>
            <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <Button type='submit'>Add</Button>
          </form>
        </div>
        <div className="taskShow">
          {
            todolist && todolist.length > 0?(
              todolist.map((task)=>(
                <Task
                key={task._id}
                title={task.title}
                description={task.description}
                id={task._id}
                />  
              ))
            ):(
              <h2>Add some task</h2>
            )
          }
        </div>
        <footer>
        <Button type='submit' onClick={logoutHandlar}>LogOut</Button>
        <Button onClick={deleteAccountHandlar}>DeleteAccount</Button>
        </footer>
        
    </div>
  )
}
