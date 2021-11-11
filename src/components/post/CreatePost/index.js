import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FormContainer, StyledContainer } from './styles';


export default function AddTodoInput(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const todo = {
      description: data.get('description'),
      title: data.get('title'),
      author: data.get('author')
    }
    props.handleAddTodo(todo)
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <CssBaseline />
      <FormContainer>
        <Box component="form" noValidate onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="title"
                name="title"
                label="Title"
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="author"
                name="author"
                label="Author"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="description"
                name="description"
                label="Description"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
              ADD NEW TODO
          </Button>
        </Box>
      </FormContainer>
    </StyledContainer>
  );
}