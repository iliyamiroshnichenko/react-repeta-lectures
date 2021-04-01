// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
import { useState, Component } from 'react';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState({ name: '', tag: '' });
  const { name, tag } = inputValue;

  const deleteTodo = todoId =>
    setTodos(prState => prState.filter(({ id }) => id !== todoId));

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setInputValue({ ...inputValue, [name]: value });
  };

  const completedTodos = todos.reduce(
    (acc, { completed }) => (completed ? acc + 1 : acc),
    0,
  );
  return (
    <>
      <h1>Состояние компонента</h1>
      <form>
        <label>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Прозвище
          <input type="text" name="tag" value={tag} onChange={handleChange} />
        </label>
      </form>
      {/* <Dropdown /> */}
      {/* <Counter initialvalue={10} /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}

      <div>
        <p>Общее кол-во: {todos.length}</p>
        <p>Кол-во выполненных: {completedTodos}</p>
      </div>
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </>
  );
};

class App2 extends Component {
  state = {
    todos: initialTodos,
    name: '',
    tag: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(({ id }) => id !== todoId),
    }));
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, { completed }) => (completed ? acc + 1 : acc),
      0,
    );
    return (
      <>
        <h1>Состояние компонента</h1>
        <form>
          <label>
            Имя
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Прозвище
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <div>
          <p>Общее кол-во: {todos.length}</p>
          <p>Кол-во выполненных: {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export { App, App2 };
