
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import { useState,useEffect } from 'react'

function App() {
  
  
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValues] = useState("")

  const persitData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({todos:
      newList
    }))
  }
  const handleAddTodos = (newTodo) =>{
  const newTodoList = [newTodo,...todos]
  persitData(newTodoList)
  setTodos(newTodoList)
  }
  const handleDeleteTodos = (index) =>{
    const newTodoList = todos.filter((todo,todoIndex) =>{
      return todoIndex !== index
    })
    persitData(newTodoList)
    setTodos(newTodoList)
 }
 const handleEditTodo = (index) =>{
  const valueToBeEdited = todos[index]
  setTodoValues(valueToBeEdited)
  handleDeleteTodos(index)

 }
 useEffect(() =>{
  if (!localStorage){
    return
  }
let localTodos = localStorage.getItem('todos')
if (!localTodos) {
  return
  
}
localTodos = JSON.parse(localTodos).todos
setTodos(localTodos)

 },[])
  return (
   
     <>
      <TodoInput todoValue = {todoValue} setTodoValues = {setTodoValues} handleAddTodos = {handleAddTodos} />
      <TodoList handleDeleteTodos = {handleDeleteTodos} todos ={todos} handleEditTodo = {handleEditTodo}/>
      
     </>
  )
}
export default App
