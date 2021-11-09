/* eslint-disable no-unused-vars */
import { Card, CardContent, Typography } from '@mui/material'
import React, { useState, useRef, useEffect } from 'react'
import List from './ListTodo'
import styled from 'styled-components'
import Input from './Input'
import Modal from './Modal'
import axios from 'axios'
import { getAllTodos } from '../../utils/todo.utils'
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
  const [todos, setTodos] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState('');
  let selectedTodoId = useRef('')
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchTimeRequest = async () => {
      try {
        const res = await axios.get(`http://worldtimeapi.org/api/timezone/Asia/Kolkata`);
        const data = res.data;
        setTime(data.datetime);
      } catch (err) {
        console.log(err);
      }
    };
    
    fetchTodoRequest();
    fetchTimeRequest();
  }, [])
  const fetchTodoRequest = async () => {
    try {
      const data = await getAllTodos();
      console.log(data);
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };

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
          <Typography gutterBottom variant="p" component="div">
            Time: {time}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          TODO LIST
          </Typography>
          <Input handleSubmit={handleSubmit}/>
          <List handleChangeDone={handleChangeDone} todos={todos} onToggleModal={onToggleModal}/>
        </CardContent>
      </Card>
      <Modal 
        selectedTodoId={selectedTodoId.current}
        isOpenModal={isOpenModal} 
        modalType={modalType} 
        onCloseModal={() => setIsOpenModal(false)}
        handleChangeTitle={handleChangeTitle}
        handleDeleteTodo={handleDeleteTodo}/>
    </Container>

  )
}

export default Todo
