import React,{useState, useEffect, useRef} from 'react'
import {Todo} from './model'
import {MdModeEdit, MdOutlineFileDownloadDone} from 'react-icons/md'
import {TiDelete} from 'react-icons/ti'


interface Props {
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}: Props) => {
  
  const handleDelete = (e: React.FormEvent, ID: number) => {
    e.preventDefault();
    setTodos(todos.filter(todo => todo.id !== ID))
  }

  const handleComplete = (e: React.FormEvent, ID: number) => {
    e.preventDefault();
    setTodos(todos.map(todo => todo.id === ID ? {...todo, isDone: !todo.isDone} : todo))
  }

  const [edit, setEdit] = useState<boolean>(false)
  const [editedText, setEditedText] = useState<string>(todo.text)

  const handleEdit = (e: React.FormEvent, ID: number) => {
    e.preventDefault();
    setTodos(todos.map(todo => todo.id === ID ? {...todo, text: editedText} : todo))
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
  inputRef.current?.focus();
  }, [edit])
  

  return (
  <form 
    className='todos__single' 
    onSubmit={e => handleEdit(e,todo.id)}
    >
      {
        edit 
        ? (
            <input 
            type="text"
            className='todos__single--text'
            placeholder='new todo..'
            ref={inputRef}
            value={editedText}
            onChange={e => setEditedText(e.target.value)}
            />
        ) : (
            todo.isDone 
            ? (
            <s className='todos__single--text'>{todo.text}</s>
            )
            : (
            <span className='todos__single--text'>{todo.text}</span>
            )
        )
      }
      <div>
        <span className="icon" onClick={() => {
          if(!edit && !todo.isDone) {
            setEdit(!edit)
          }
        }}
        ><MdModeEdit/></span>
        <span className="icon" onClick={e => handleComplete(e, todo.id)}><MdOutlineFileDownloadDone/></span>
        <span className="icon" onClick={e => handleDelete(e, todo.id)}><TiDelete/></span>
      </div>
    </form>
  )
}

export default SingleTodo