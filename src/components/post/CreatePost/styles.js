import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import styled from 'styled-components'

export const StyledContainer = styled(Container)`
  padding: 10px;
  border-radius: 20px;
  box-shadow: 5px 10px #888888;
  margin-bottom: 20px;
  border: 1px solid black;
`

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`