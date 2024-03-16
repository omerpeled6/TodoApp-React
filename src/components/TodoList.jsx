import TodoItem from './TodoItem';
import style from './todolist.module.css';

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={style.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          item={item}
          key={item.name}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
