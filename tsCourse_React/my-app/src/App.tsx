//**************************
//     1 
//   пример TodoList
//**************************


// import React from 'react';
// import TodoList from "./components/TodoList"
// const App: React.FC = () => {
//   const todos = [{id: "1", title: "text"}]
//   return (
//     <div className="App">
//       <TodoList todos={todos} />
//     </div>
//   );
// }

// export default App;

//**************************
//     2 
//   пример TodoList with Refs or onChange
//**************************

// import React from 'react';
// import TodoList from "./components/TodoList"
// import AddTodo from "./components/AddTodo"
// const App: React.FC = () => {
//   const todos = [{id: "1", title: "text"}]
//   return (
//     <div className="App">
//       <AddTodo />
//       <TodoList todos={todos} />
//     </div>
//   );
// }

// export default App;

//**************************
//     3 
//   пример TodoList with  onChange - События
//**************************

import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { IItems } from "./types/todo";

const App: React.FC = () => {

  const [todos, setTodos] = useState<IItems[]>([]);

  function todoAddHandler(todo:IItems) {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random().toString(),
          title: todo.title
        }
      ]
    })
  }
  function todoRemoveHandler(id:string): void {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => {
        return item.id!== id
      })
    })
  }
  return (
    <div className="App">
      <AddTodo onAddTodo={ todoAddHandler} />
      <TodoList onRemoveTodo={todoRemoveHandler} todos={todos} />
    </div>
  );
}

export default App;