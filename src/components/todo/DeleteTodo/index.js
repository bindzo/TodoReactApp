import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { deleteTodo } from '../../../utils/todo.utils'
import { StyledButton } from './styles'


const DeleteModal = (props) => {

  const onDeleteClick = () => {
    props.onClick()
    deleteTodo({id: props.id})
    props.handleClose()
  }
  return (
    <div>
      <Box>
        <Typography id="modal-modal-title" variant="h4" component="h1">
          Confirm delete
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h4">
          Would you like to delete this todo?
        </Typography>
        <div style={{margin: 10}}>
          <Button onClick={props.handleClose} variant="contained">
          Cancel
          </Button>
          <StyledButton
            onClick={onDeleteClick} variant="contained" color="error">
          Delete
          </StyledButton>
        </div>
        
      </Box>
    </div>
  )
}

export default DeleteModal
