import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props ) => {
 const {todos} = props
 
  return (
    <ul>
      {todos.map((todo,todosIndex)=>{
        return (
          <TodoCard {...props} key={todosIndex} index = {todosIndex}>

            <p>{todo}</p>
          </TodoCard>
        )

      })}
    </ul>
  )
}

export default TodoList