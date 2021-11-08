import { Card, CardContent, Typography } from '@mui/material'
import React, { useState, useRef } from 'react'
import List from './ListTodo'
import styled from 'styled-components'
import Input from './Input'
import Modal from './Modal'
const todosInit = [
  {
    "_id": "618502d263f46dd163d88b5a",
    "title": "hello",
    "done": false,
    "date": "2021-11-05T10:09:22.006Z",
    "priority": 1,
    "userId": "6184f82b6a22c9027e4a324d",
    "__v": 0
  },
  {
    "_id": "618502d263f46dd163d88b5b",
    "title": "hello2",
    "done": false,
    "date": "2021-11-05T10:09:22.006Z",
    "priority": 1,
    "userId": "6184f82b6a22c9027e4a324d",
    "__v": 0
  },
  {
    "_id": "618502d263f46dd163d88b5c",
    "title": "hello3",
    "done": true,
    "date": "2021-11-05T10:09:22.006Z",
    "priority": 1,
    "userId": "6184f82b6a22c9027e4a324d",
    "__v": 0
  }
]

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  height: calc(100vh - 40px);
  overflow: scroll;
`

const Todo = () => {
  const [todos, setTodos] = useState(todosInit)
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState('');
  let selectedTodoId = useRef('')
  const handleSubmit = (title, done) => {
    const newTodo = {
      _id: new Date(),
      title,
      done,
      date: new Date(),
      priority: 1,
      userId: "6184f82b6a22c9027e4a324d",
    }
    setTodos([...todos, newTodo])
  }
  const handleChangeDone = (done, id) => {
    const newTodos = todos.map((todo) => {
      if(todo._id === id) {
        todo.done = done
      }
      return todo
    })
    setTodos([...newTodos])
  }

  const handleChangeTitle = (title) => {
    const newTodos = todos.map((todo) => {
      if(todo._id === selectedTodoId.current) {
        todo.title = title
        console.log(todo);
      }
      return todo
    })
    setTodos([...newTodos])
  }

  const handleDeleteTodo= () => {
    const newTodos = todos.filter((todo) => 
      todo._id !== selectedTodoId.current
    )
    setTodos([...newTodos])
  }

  const onToggleModal = (id, type) => {
    selectedTodoId.current = id
    setModalType(type)
    setIsOpenModal(true);
  }
  return (
    <Container>
      <Card sx={{ minWidth: 600 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          TODO LIST
          </Typography>
          <Input handleSubmit={handleSubmit}/>
          <List handleChangeDone={handleChangeDone} todos={todos} onToggleModal={onToggleModal}/>
        </CardContent>
      </Card>
      <Modal 
        isOpenModal={isOpenModal} 
        modalType={modalType} 
        onCloseModal={() => setIsOpenModal(false)}
        handleChangeTitle={handleChangeTitle}
        handleDeleteTodo={handleDeleteTodo}/>
    </Container>

  )
}

export default Todo
