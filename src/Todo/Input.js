import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
  width: 100%;
  display: flex;
`

const StyledTextField = styled(TextField)`
  width: 80%;
`

const StyledButton = styled(Button)`
  width: 20%;
`

const Input = (props) => {
  const [newTodo, setNewTodo] = useState('');
  const _handleSubmit = () => {
    if(newTodo) {
      setNewTodo('');
      props.handleSubmit(newTodo, false)
    }
  }
  return (
    <Container>
      <StyledTextField  
        size="small" 
        id="outlined-basic"
        label="Add new todo" 
        variant="outlined"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}/>
      <StyledButton 
        onClick={_handleSubmit} 
        variant="contained">
        Submit
      </StyledButton>
    </Container>
  )
}

export default Input
