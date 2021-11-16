import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AuthContext } from '../../../pages/App';
import { useNavigate } from 'react-router-dom';
import { StyledLink } from './styles';

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
            <StyledLink to="/todo">
              <Button color="inherit">REST</Button>
            </StyledLink>
            <StyledLink to="/todogql">
              <Button color="inherit">GRAPHQL</Button>
            </StyledLink>
            <Button id="logout-btn" onClick={onLogoutClick} color="inherit">Logout</Button>
          </div>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}