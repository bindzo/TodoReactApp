import React, { useEffect } from 'react'
import Item from '../ItemTodo'
import { StyledList } from './styles'

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
