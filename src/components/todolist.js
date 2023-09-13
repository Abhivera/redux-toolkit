 
import {useSelector} from 'react-redux';
import mysvg from '../trash.svg';
import {removeTodo} from '../features/todo/todoSlice.js';
import {useDispatch} from 'react-redux';



const Todolist = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todos)
    console.log(todos);
  return (<>
  <div>Todos  shown below </div>
  <ul className="List-none">
    {todos.map((todo)=><li key ={todo.id}><div className="flex  ">{todo.text} <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    onClick={()=>dispatch(removeTodo(todo.id))} > <img src={mysvg} className="px-4"/> </button></div></li>)}
  </ul>
  </>
    
  )
}

export default Todolist