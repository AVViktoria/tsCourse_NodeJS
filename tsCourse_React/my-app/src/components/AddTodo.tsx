//**************************
//     2 
//   пример TodoList with Refs
//**************************

// import React, { useRef } from 'react';

// const AddTodo: React.FC = () => {
//   //  при использовании Refs- обязательно нужно указывать 
//   //  какого типа элемент, как здесь useRef<HTMLInputElement>
//   const titleInputRef = useRef<HTMLInputElement>(null);
// function submitHandler(e: React.FormEvent) {
//   e.preventDefault();
//   console.log(titleInputRef.current?.value);
// }
//   return (
//     <form onSubmit = {submitHandler}>
//       <div>
//         <span>Add Title</span>
//         <input type="text" id="add-todo" ref={ titleInputRef} />
// </div>
// <button type = "submit">Add Todo</button>
//     </form>
//   )
    
// }

// export default AddTodo;

//* В  консоль выводится его Title 
// First Title

//**************************
//     3 
//   пример TodoList with  useState - onChange - 
//  используем Pick and Partial на практике
//**************************

import React, { useState } from 'react';
import { IItems } from "../types/todo";

interface IProp{
  onAddTodo: (todo: IItems) => void;
}


type OnlyTitle = Pick<IItems, "title">
const AddTodo: React.FC<IProp> = (props) => {
  const [todo, titleTodo] = useState<Partial<OnlyTitle>>({})
function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
  titleTodo({
    title: e.target.value,
  })
}
function submitHandler(e: React.FormEvent) {
  e.preventDefault();
  if (!todo.title) {
    return;
  }
  props.onAddTodo(todo as IItems); // лучше так не делать
}
  return (
    <form onSubmit = {submitHandler}>
      <div>
        <span>Add Title</span>
        <input type="text" id="add-todo" onChange={ titleHandler} />
</div>
<button type = "submit">Add Todo</button>
    </form>
  ) 
}

export default AddTodo;

//* todo on the screen look like:  
// 0.7979855472193278 
// First Todo