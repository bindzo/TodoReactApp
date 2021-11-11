import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 45%;
  margin: 10px;
  height: 200px;
  padding: 10px;
  border-radius: 20px;
  background: #7fc98c;
  overflow-y: auto;
  box-shadow: 5px 10px #888888;
`

const Description = styled.div`
  margin: 10px 0;
`

const Author = styled.div`
  text-align: right;
`
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
