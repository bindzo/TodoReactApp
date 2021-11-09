import axios from 'axios'
import config from '../config'
const getHeaders = () => {
  // eslint-disable-next-line no-undef
  return { Authorization: `Bearer ${localStorage.getItem('token')}` }
}

export const getAllTodos = async () => {
  const server = config.serverUrl
  try {
    const res = await axios.get(`${server}/todo`, {headers: getHeaders()});
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}

export const addTodo = async ({title, done = false, priority = 1}) => {
  const server = config.serverUrl
  try {
    // eslint-disable-next-line no-undef
    const res = await axios.post(`${server}/todo`, {title, done, priority}, {headers: getHeaders()});
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
    ...(done !== undefined && {done}),
    ...(priority && {priority})
  }

  try {
    // eslint-disable-next-line no-undef
    const res = await axios.put(`${server}/todo/${id}`,payload, {headers: getHeaders()});
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}

export const deleteTodo = async ({id}) => {
  const server = config.serverUrl
  try {
    // eslint-disable-next-line no-undef
    const res = await axios.delete(`${server}/todo/${id}`, {headers: getHeaders()});
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}
