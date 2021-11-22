import axios from 'axios'
import api from '../constants/api'
const getHeaders = () => {
  // eslint-disable-next-line no-undef
  return { Authorization: `Bearer ${localStorage.getItem('token')}` }
}

export const getAllTodos = async () => {
  try {
    const res = await axios.get(`${api.REST}/todo`, {headers: getHeaders()});
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}

export const addTodo = async ({title, done = false, priority = 1}) => {
  try {
    // eslint-disable-next-line no-undef
    const res = await axios.post(`${api.REST}/todo`, {title, done, priority}, {headers: getHeaders()});
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}

export const updateTodo = async ({title, done, priority = 1, id}) => {
  const payload = {
    ...(title && {title}),
    ...(done !== undefined && {done}),
    ...(priority && {priority})
  }

  try {
    // eslint-disable-next-line no-undef
    const res = await axios.put(`${api.REST}/todo/${id}`,payload, {headers: getHeaders()});
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}

export const deleteTodo = async ({id}) => {
  try {
    // eslint-disable-next-line no-undef
    const res = await axios.delete(`${api.REST}/todo/${id}`, {headers: getHeaders()});
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}
