import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, {Fragment, useState} from 'react'
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
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
            </Route>
          </Routes>
        </Fragment>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
