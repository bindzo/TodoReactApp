import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddTodoInput from '../../components/post/CreatePost'
import Todo from '../../components/post/ItemPost'
import { useQuery, useMutation } from '@apollo/client';
import mutationsPost from '../../graphql/mutations/post';
import queriesPost from '../../graphql/queries/post';
import { Container, ListTodo } from './styles';


const TodoGQL = () => {
  const [todos, setTodos] = useState([])
  useQuery(queriesPost.GET_POSTS, {onCompleted: (data) => setTodos(data.posts)});
  const [createPost] = useMutation(mutationsPost.ADD_POST);
  const renderTodos = () => {
    return todos.map((todo) => <Todo key={todo.id} todo={todo}/>)
  }

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo])
    createPost({ variables: { data: todo } })
  }
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
