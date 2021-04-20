import ColorPicker from './components/ColorPicker';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import { useState } from 'react';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const deleteTodo = todoId =>
    setTodos(prState => prState.filter(({ id }) => id !== todoId));

  const completedTodos = todos.reduce(
    (acc, { completed }) => (completed ? acc + 1 : acc),
    0,
  );
  return (
    <>
      <h1>Состояние компонента</h1>
      {/* <Dropdown /> */}
      <Counter />
      {/* <ColorPicker options={colorPickerOptions} /> */}

      <div>
        <p>Общее кол-во: {todos.length}</p>
        <p>Кол-во выполненных: {completedTodos}</p>
      </div>
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </>
  );
};

// class App extends Component {
//   state = {
//     todos: initialTodos,
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(({ id }) => id !== todoId),
//     }));
//   };

//   render() {
//     const { todos } = this.state;

//     const completedTodos = todos.reduce(
//       (acc, { completed }) => (completed ? acc + 1 : acc),
//       0,
//     );
//     return (
//       <>
//         <h1>Состояние компонента</h1>
//         <div>
//           <p>Общее кол-во: {todos.length}</p>
//           <p>Кол-во выполненных: {completedTodos}</p>
//         </div>
//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }

export default App;
