import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { updateTodo } from '../../../utils/todo.utils'
import { ButtonContainer, InputField, StyledButton } from './styles'


const UpdateModal = (props) => {
  const [updatedTodo, setUpdatedTodo] = useState('')
  const onUpdateClick = () => {
    props.onClick(updatedTodo)
    updateTodo({id: props.id, title: updatedTodo});
    props.handleClose()
  }
  return (
    <div>
      <Box>
        <Typography id="modal-modal-title" variant="h4" component="h1">
          Update
        </Typography>
        <InputField  
          size="small" 
          id="outlined-basic"
          label="New todo content" 
          variant="outlined"
          onChange={(e) => setUpdatedTodo(e.target.value)}
          value={updatedTodo}/>
        <ButtonContainer>
          <Button onClick={props.handleClose} variant="contained">
          Cancel
          </Button>
          <StyledButton onClick={onUpdateClick} variant="contained" color="success">
            Update
          </StyledButton>
        </ButtonContainer>
      </Box>
    </div>
  )
}

export default UpdateModal
