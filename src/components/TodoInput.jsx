import React, { useState } from 'react'

const TodoInput = (props) => {
  const {handleAddTodos} = props
  const [todoValue, setTodoValues] = useState("")
  

  return (
    <header>
      <input value={todoValue} onChange={(e)=>{setTodoValues(e.target.value)}} placeholder='Enter Todo...'/>
      
      <button onClick={()=>{
        handleAddTodos(todoValue)
        {setTodoValues("")}
      }}>Add </button>
      
    </header>
  )
}

export default TodoInput