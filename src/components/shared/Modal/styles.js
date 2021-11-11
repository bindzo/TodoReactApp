import Box from '@mui/material/Box';
import styled from 'styled-components'

export const StyledBox = styled(Box) `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 4px;
  background: white;
`