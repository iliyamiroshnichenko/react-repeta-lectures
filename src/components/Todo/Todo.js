import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import styles from '../TodoList/TodoList.module.css';

const Todo = ({ text, completed, ontoggleCompleted, onDelete }) => {
  return (
    <>
      <input type="checkbox" checked={completed} onChange={ontoggleCompleted} />
      <p className={completed ? styles.completed : styles.text}>{text}</p>
      <button type="button" onClick={onDelete}>
        Удалить
      </button>
      <IconButton onClick={onDelete} aria-label="Delete todo">
        <DeleteIcon width="20" height="20" fill="#fff" />
      </IconButton>
    </>
  );
};

export default Todo;
