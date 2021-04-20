import { useState } from 'react';
import { connect } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';

const TodoEditorFunc = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleCgange = e => {
    setState(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea value={state} onChange={handleCgange}></textarea>
      <button type="submit">Добавить</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(todosActions.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditorFunc);
