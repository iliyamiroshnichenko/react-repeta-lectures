// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
import { useState, Component } from 'react';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import { Form, Form2 } from './components/Form/Form';
import TodoEditor from './components/TodoEditor/TodoEditor';

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

  const deleteTodo = todoId =>
    setTodos(prState => prState.filter(({ id }) => id !== todoId));

  const toggleCompleted = todoId => {
    setTodos(prState =>
      prState.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const completedTodos = todos.reduce(
    (acc, { completed }) => (completed ? acc + 1 : acc),
    0,
  );
  return (
    <>
      <h1>Состояние компонента</h1>
      <Form />
      {/* <Dropdown /> */}
      {/* <Counter initialvalue={10} /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}

      <div>
        <p>Общее кол-во: {todos.length}</p>
        <p>Кол-во выполненных: {completedTodos}</p>
      </div>
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        ontoggleCompleted={toggleCompleted}
      />
    </>
  );
};

class App2 extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(({ id }) => id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
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
        <div>
          <p>Общее кол-во: {todos.length}</p>
          <p>Кол-во выполненных: {completedTodos}</p>
        </div>
        <TodoEditor />
        {/* <Form2 onSubmit={this.formSubmitHandler} /> */}

        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          ontoggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export { App, App2 };
