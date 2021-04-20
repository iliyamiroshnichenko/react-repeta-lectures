import { connect } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Фильтр по имени
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

const mapStateToProps = state => ({
  value: state.todos.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
