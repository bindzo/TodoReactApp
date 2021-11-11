import { IconButton } from '@mui/material'
import styled from 'styled-components'
import { ListItemText } from '@mui/material'

export const StyledIconButton = styled(IconButton)`
  margin-left: 20px;
`

export const StyledListItemText = styled(ListItemText)`
text-decoration: ${props => props.done ? 'line-through' : 'none'};
`