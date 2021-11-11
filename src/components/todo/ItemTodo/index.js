import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { updateTodo } from '../../../utils/todo.utils';
import { StyledIconButton, StyledListItemText } from './styles';

const ItemTodo = (props) => {
  const [title,setTitle] = useState(props.todo.title)
  const [done, setDone] = useState(props.todo.done)

  const _handleChangeDone = (e) => {
    setDone(e.target.checked)
    updateTodo({done: e.target.checked, id: props.todo._id});
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
        <StyledIconButton edge="end" aria-label="delete"
          onClick={()=> props.onToggleModal(props.todo._id, 'update')}>
          <CreateIcon  />
        </StyledIconButton>
      </div>
    }>
      <ListItemButton>
        <ListItemIcon>
          <Checkbox onChange={_handleChangeDone} checked={done}/>
        </ListItemIcon>
        <StyledListItemText done={done ? 1 : 0} primary={title} />
      </ListItemButton>
    </ListItem>
  )
}

export default ItemTodo
