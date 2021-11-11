import { Typography } from '@mui/material'
import React from 'react'
import { Author, Container, Description } from './styles'

const Todo = ({todo}) => {
  return (
    <Container >
      <Typography variant="h5" component="div">{todo.title}</Typography>
      <Description>
        <Typography variant="body" component="div">&quot;{todo.description}&quot;</Typography>
      </Description>
      <Author>
        <Typography variant="body" component="div">-{todo.author}-</Typography>
      </Author>
    </Container>
  )
}

export default Todo
