import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, {Fragment, useState} from 'react'
import Header from '../../components/shared/Header';
import Todo from '../Todo';
import Login from '../Login';
import PrivateRoute from "../PrivateRoute";
import TodoGQL from "../Post";
export const AuthContext = React.createContext(null);
function App() {
  // eslint-disable-next-line no-undef
  const [auth, setAuth] = useState(localStorage.getItem('token'));
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <Router>
        <Fragment>
          <Header/>
          <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/' element={<PrivateRoute/>}>
              <Route exact path='/todo' element={<Todo/>}/>
              <Route exact path='/todogql' element={<TodoGQL/>}/>
            </Route>
          </Routes>
        </Fragment>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
