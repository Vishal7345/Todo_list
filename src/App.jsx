import { useDispatch } from "react-redux";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
import { bindActionCreators } from "redux";
import { addTodo,deleteTodo,editTodo,todoFinished } from "./actions/todoActions";
function App() {

  const dispatch=useDispatch()
  const actions=bindActionCreators({addTodo,deleteTodo,editTodo,todoFinished},dispatch)

  return (
       < >
        <AddTodo  addTodo={actions.addTodo}/>
        <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={todoFinished} />
        </>
      
  );
}

export default App;
