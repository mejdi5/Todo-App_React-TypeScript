import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import {Todo} from './components/model'


const App: React.FC = () => {

  const [text, setText] = useState<string>("")
  const [todos, setTodos] = useState<Array<Todo>>([])
  const [option, setOption] = useState<string>("All")


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (text) {
      setTodos([...todos, {id: Math.random(), text, isDone: false}])
      setText("")
    }
  }


  return (
    <div className="App">
      <span className="heading">Todo List</span>
      <select onChange={e => setOption(e.target.value)} className='todos__filter'>
        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="Not Done">Not Done</option>
      </select>

      <InputField 
      text={text} 
      setText={setText} 
      handleAdd={handleAdd}
      />

      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      option={option}
      />
    </div>
  );
}

export default App;
