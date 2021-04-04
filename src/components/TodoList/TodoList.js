import styles from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, ontoggleCompleted }) => (
  <ul className={styles.TodoList}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={styles.TodoList__item}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => ontoggleCompleted(id)}
        />
        <p className={completed ? styles.completed : styles.text}>{text}</p>
        <button type="button" onClick={() => onDeleteTodo(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
