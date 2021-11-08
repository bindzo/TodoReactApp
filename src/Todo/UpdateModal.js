import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'


const UpdateModal = (props) => {
  const [updatedTodo, setUpdatedTodo] = useState('')
  const onUpdateClick = () => {
    props.onClick(updatedTodo)
    props.handleClose()
  }
  return (
    <div>
      <Box>
        <Typography id="modal-modal-title" variant="h4" component="h1">
          Update
        </Typography>
        <TextField  
          size="small" 
          id="outlined-basic"
          label="New todo content" 
          variant="outlined"
          style={{width: '100%', margin: '10px 0'}}
          onChange={(e) => setUpdatedTodo(e.target.value)}
          value={updatedTodo}/>
        <div style={{margin: 10}}>
          <Button onClick={props.handleClose} variant="contained">
          Cancel
          </Button>
          <Button onClick={onUpdateClick} variant="contained" color="success" style={{marginLeft: 10}}>
          Update
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default UpdateModal
