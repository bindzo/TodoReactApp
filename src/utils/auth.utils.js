import axios from 'axios'
import api from '../constants/api';


export const login = async ({username , password}) => {
  try {
    const res = await axios.post(`${api.REST}/user/login`, {username, password});
    // eslint-disable-next-line no-undef
    localStorage.setItem('token', res.data.data.id_token);
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}
