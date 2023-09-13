import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todo/todoSlice.js';

const AddTodo = () => {
    const [ input, setInput] = useState('');
    const dispatch = useDispatch();
     
    const addtodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('')
    }
  return (
  <form onSubmit={addtodoHandler}>
    <div>
      <input type="text"  value={input} onChange ={(e)=>{setInput(e.target.value)}} className="bg-cyan-400 text-white" />
    </div>
    <div> 
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-5 py-2 px-4 rounded" type="submit">
  Add Todo
      </button>
    </div>
  </form>
    
  )
}

export default AddTodo