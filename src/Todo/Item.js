import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const ItemTodo = (props) => {
  const [title,setTitle] = useState(props.todo.title)
  const [done, setDone] = useState(props.todo.done)

  const _handleChangeDone = (e) => {
    setDone(e.target.checked)
    props.handleChangeDone(e.target.checked,props.todo._id);
  }


  useEffect(() => {
    setTitle(props.todo.title)
  }, [props.todo.title])
  return (
    <ListItem disablePadding secondaryAction={
      <div>
        <IconButton edge="end" aria-label="delete" 
          onClick={() => props.onToggleModal(props.todo._id, 'delete')}>
          <DeleteIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" style={{marginLeft: 20}}
          onClick={()=> props.onToggleModal(props.todo._id, 'update')}>
          <CreateIcon  />
        </IconButton>
      </div>
    }>
      <ListItemButton>
        <ListItemIcon>
          <Checkbox onChange={_handleChangeDone} checked={done}/>
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  )
}

export default ItemTodo
