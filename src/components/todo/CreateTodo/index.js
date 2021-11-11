import React, { useState } from 'react'
import { addTodo } from '../../../utils/todo.utils'
import { Container, StyledButton, StyledTextField } from './styles';


const Input = (props) => {
  const [newTodo, setNewTodo] = useState('');
  const _handleSubmit = () => {
    if(newTodo) {
      setNewTodo('');
      addTodo({title: newTodo});
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
