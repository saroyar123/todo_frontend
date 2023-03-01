import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask,userLoad } from '../../Action/user';
import "./Task.css"

export const Task = ({title,description,id}) => {
  const dispatch=useDispatch();

  const deleteHandlar=async(e)=>{
    const token=localStorage.getItem("token");
    console.log(token);
       e.preventDefault();
       await dispatch(deleteTask(id,token));
       dispatch(userLoad(token));
  }
return (
    <div className='Task'>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <Button onClick={deleteHandlar}>delete</Button>
    </div>
  )
}
