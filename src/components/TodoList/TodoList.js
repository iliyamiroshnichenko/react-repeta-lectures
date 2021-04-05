import Todo from '../Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, ontoggleCompleted }) => (
  <ul className={styles.TodoList}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={styles.TodoList__item}>
        <Todo
          text={text}
          completed={completed}
          ontoggleCompleted={() => ontoggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
