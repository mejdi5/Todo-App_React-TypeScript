import React from 'react'
import {Todo} from "./model"
import SingleTodo from './SingleTodo'


interface listProps {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    option: string
}

const TodoList: React.FC<listProps> = ({todos, setTodos, option}: listProps) => {

  let result = []

  if (option === "All") {
    result = todos
  } else if (option === "Done") {
    result = todos.filter(todo => todo.isDone)
  } else {
    result = todos.filter(todo => !todo.isDone)
  }

  return (
    <div className='todos'>
        {
          result.map(todo => 
          <SingleTodo 
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          />
          )
        }
    </div>
  )
}

export default TodoList