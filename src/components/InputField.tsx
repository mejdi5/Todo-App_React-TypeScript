import React, {useRef} from 'react'

interface todoProps {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<todoProps> = ({text, setText, handleAdd}: todoProps) => {
  
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form 
    className='input' 
    onSubmit={e => 
      {
      handleAdd(e);
      inputRef.current?.blur();
      }
    }
    >
        <input 
        ref={inputRef}
        type="text"
        placeholder="Enter Task.."
        className="input__box"
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <button
        className='input_submit'
        type='submit'>
            Add 
        </button>
    </form>
  )
}

export default InputField