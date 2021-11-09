import axios from 'axios'
import config from '../config'
export const getAllTodos = async () => {
  const server = config.serverUrl
  try {
    const res = await axios.get(`${server}/todo`, {headers: config.headers});
    console.log(config,res);
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}

export const addTodo = async ({title, done = false, priority = 1}) => {
  const server = config.serverUrl
  try {
    const res = await axios.post(`${server}/todo`, {title, done, priority}, {headers: config.headers});
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}

export const updateTodo = async ({title, done, priority = 1, id}) => {
  const server = config.serverUrl
  const payload = {
    ...(title && {title}),
    ...(done && {done}),
    ...(priority && {priority})
  }
  try {
    const res = await axios.put(`${server}/todo/${id}`,payload, {headers: config.headers});
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}

export const deleteTodo = async ({id}) => {
  const server = config.serverUrl
  try {
    const res = await axios.delete(`${server}/todo/${id}`, {headers: config.headers});
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}
