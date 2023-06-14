//**************************
//     1, 2, 3 
//   пример TodoList
//**************************
  
  
// import React from 'react';
// import {IItems} from "../types/todo"

// interface IProps{
//   todos:IItems[]
// }

// //* Пример с константами
// const TodoList: React.FC<IProps> = (props) => {
//   return (
//     <ul>
//       {props.todos.map((item) => {
//         return (
//           <li key={item.id}>
//             <div>{item.id}</div>
//             <div>{item.title}</div>
//           </li>
//         )
//       } )}
//     </ul>

//   );
// }


// //* Пример с классами
// // interface IState{
// //   count: number;
// // }

// // class TodoList extends React.Component<IProps, IState>{
// //   stateHandler() {
// //     this.setState(({ count }) => {
//       //  return {
//       //   count: ++count,
// //     })
// //   }
// //   render() {
// //     return null;
// //   }
// // }
// export default TodoList;


//* todo on the screen look like:  
// 1
// text

//**************************
//     4 
//   Delete
//**************************

import React from 'react';
import {IItems} from "../types/todo"

interface IProps{
  todos: IItems[];
  onRemoveTodo: (id: string) => void;
}

const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((item) => {
        return (
          <li key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            {/* <button onClick={() => { props.onRemoveTodo(item.id) }}>Remove</button>  // можно так или через bind */}
             <button onClick={ props.onRemoveTodo.bind(this, item.id)}>Remove</button>
          </li>
        )
      } )}
    </ul>

  );
}

export default TodoList;