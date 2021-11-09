import React, { useEffect } from 'react'
import Item from './Item'
import styled from 'styled-components'
import { List } from '@mui/material'

const StyledList = styled(List)`
  list-style-type: none;
  padding: 0;
  height: 400px;
  overflow: auto;
`

const ListTodo = (props) => {
  useEffect(() => {
  }, [props.todos])

  const renderItems = () => {
    const {todos} = props
    return todos.map((todo) => {
      return <Item onToggleModal={props.onToggleModal} handleChangeDone={props.handleChangeDone} todo={todo} key={todo._id}/>
    })
  }

  return (
    <div>
      <StyledList>
        {renderItems()}
      </StyledList>
    </div>
  )
}

export default ListTodo
