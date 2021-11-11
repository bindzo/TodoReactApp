import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from '../../utils/auth.utils';
import { AuthContext } from '../App';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { StyledBox, WarningText } from './styles';
const theme = createTheme();



export default function SignIn() {
  const navigate = useNavigate();
  const [isWarning, setIsWaring] = React.useState(false);
  const {setAuth} = React.useContext(AuthContext)
  const handleSubmit = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const authToken = await login({
      username: data.get('username'),
      password: data.get('password'),
    })
    if(authToken) {
      setIsWaring(false)
      setAuth(authToken.id_token)
      navigate('/todo')
    }else {
      setIsWaring(true)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <StyledBox>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {isWarning && <WarningText>Wrong username or password!</WarningText>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </StyledBox>
      </Container>
    </ThemeProvider>
  );
}