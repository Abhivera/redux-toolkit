import Todolist from "./components/todolist";
import AddTodo from "./components/addTodo";
const  App = () => {
  return (
<div className='bg-slate-400 p-5'>
Abhijit
 <div>
  <AddTodo/>
 </div>
 <div>
  <Todolist/>
 </div>
 </div>
  );
}

export default App;
