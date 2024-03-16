import { useState } from 'react';
import style from './form.module.css';

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: '', done: false });

  const handleSumbit = (e) => {
    e.preventDefault(); // מונע פעולת חידוש דף ע״י לחיצה
    setTodos([...todos, todo]); // ...todos when writing , todo -> only save when click
    setTodo({ name: '', done: false }); // remove the value when click
  };
  return (
    <form className={style.todoform} onSubmit={handleSumbit}>
      <div className={style.inputContainer}>
        <input
          className={style.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter Todo Item"
        />
        <button className={style.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
