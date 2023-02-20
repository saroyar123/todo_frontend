import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask,userLoad } from '../../Action/user';
import "./Task.css"

export const Task = ({title,description,id}) => {
  const dispatch=useDispatch();

  const deleteHandlar=async(e)=>{
       e.preventDefault();
       await dispatch(deleteTask(id));
       dispatch(userLoad());
  }
return (
    <div className='Task'>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <Button onClick={deleteHandlar}>delete</Button>
    </div>
  )
}
