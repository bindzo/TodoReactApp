import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import AddTodoInput from './AddTodoInput'
import Todo from './Todo'
import { useQuery, useMutation } from '@apollo/client';
import gql from '../constants/graphql';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  overflow: scroll;
`

const ListTodo = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  flex-wrap: wrap;
  overflow-y: auto;
`

const TodoGQL = () => {
  const [todos, setTodos] = useState([])
  useQuery(gql.GET_TODOS, {onCompleted: (data) => setTodos(data.posts)});
  const [createPost, { data }] = useMutation(gql.ADD_TODO);
  const renderTodos = () => {
    return todos.map((todo) => <Todo key={todo.id} todo={todo}/>)
  }

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo])
    console.log(todo);
    createPost({ variables: { data: todo } })
  }
  console.log(data)
  return (
    <Container>
      <Card sx={{ minWidth: 600 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            TODO LIST WITH GRAPHQL
          </Typography>
          <AddTodoInput handleAddTodo={handleAddTodo}/>
          <ListTodo>
            {renderTodos()}
          </ListTodo>
        </CardContent>
      </Card>
    </Container>

  )
}

export default TodoGQL
