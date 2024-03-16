import style from './todoitem.module.css';

export default function TodoItem({ item, todos, setTodos }) {
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item)); // return arr witout the correct todo
  };
  const handleClick = (name) => {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const className2 = item.done ? style.completed : '';
  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span className={className2} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={style.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={style.line} />
    </div>
  );
}
