import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AuthContext } from '../../App';
import { useNavigate, Link } from 'react-router-dom';

export default function Header() {
  const {auth, setAuth} = React.useContext(AuthContext)
  const navigate = useNavigate();

  const onLogoutClick = () => {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('token');
    if(auth) {
      navigate('/login')
      setAuth(null)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          {auth &&
          <div>
            <Link style={{textDecoration: 'none', color: 'white'}} to="/todogql">
              <Button color="inherit">GRAPHQL</Button>
            </Link>
            <Button onClick={onLogoutClick} color="inherit">Logout</Button>
          </div>
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
}