import React from 'react'

const TodoCard = (props) => {
  const {children, handleDeleteTodos, index, handleEditTodo}  = props
  return (
    
      <li className='todoItem'>
        {children}
         <div className='actionContainer'>
          <button onClick={()=>{handleEditTodo(index)}}>
      <i className="fa-regular fa-pen-to-square"></i>
      </button>
      <button onClick={()=>{handleDeleteTodos(index)}}>
      <i className="fa-solid fa-trash-can"></i>
      </button>
      </div>
      </li>
    
  )
}

export default TodoCard