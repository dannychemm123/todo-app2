
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import { useState } from 'react'

function App() {
  
  
  const [todos, setTodos] = useState([])
  const handleAddTodos = (newTodo) =>{
  const newTodoList = [newTodo,...todos]
  setTodos(newTodoList)
  }
  const handleDeleteTodos = (index) =>{
    const newTodoList = todos.filter((todo,todoIndex) =>{
      return todoIndex !== index
    })
    setTodos(newTodoList)
 }
  return (
   
     <>
      <TodoInput handleAddTodos = {handleAddTodos} />
      <TodoList handleDeleteTodos = {handleDeleteTodos} todos ={todos}/>
      
     </>
  )
}
export default App
