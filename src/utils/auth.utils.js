import axios from 'axios'
import config from '../config'


export const login = async ({username , password}) => {
  const server = config.serverUrl
  try {
    const res = await axios.post(`${server}/user/login`, {username, password});
    // eslint-disable-next-line no-undef
    localStorage.setItem('token', res.data.data.id_token);
    return res.data.data
  }
  catch(e) {
    console.log(e);
  }
}
