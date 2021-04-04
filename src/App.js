// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
import { useState, useEffect, Component } from 'react';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
// import { Form, Form2 } from './components/Form/Form';
import { TodoEditor, TodoEditorFunc } from './components/TodoEditor/TodoEditor';
import shortid from 'shortid';
import Filter from './components/Filter/Filter';
import { Modal, ModalFunc } from './components/Modal/Modal';

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
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const parsedTodos = JSON.parse(localStorage.getItem('todosHook'));
    if (parsedTodos.length) {
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todosHook', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    setTodos(prState => [todo, ...prState]);
  };

  const deleteTodo = todoId =>
    setTodos(prState => prState.filter(({ id }) => id !== todoId));

  const toggleCompleted = todoId => {
    setTodos(prState =>
      prState.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const toggleModal = () => {
    setModal(prState => !prState);
  };

  const completedTodos = todos.reduce(
    (acc, { completed }) => (completed ? acc + 1 : acc),
    0,
  );

  const normalizedFilter = filter.toLowerCase();
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(normalizedFilter),
  );
  return (
    <>
      <h1>Состояние компонента</h1>
      {/* <Form /> */}
      {/* <Dropdown /> */}
      {/* <Counter initialvalue={10} /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      <div>
        <p>Общее кол-во: {todos.length}</p>
        <p>Кол-во выполненных: {completedTodos}</p>
      </div>
      <TodoEditorFunc onSubmit={addTodo} />
      <Filter value={filter} onChange={changeFilter} />
      <TodoList
        todos={filteredTodos}
        onDeleteTodo={deleteTodo}
        ontoggleCompleted={toggleCompleted}
      />
      <button type="button" onClick={toggleModal}>
        Открыть модалку
      </button>
      {modal && (
        <ModalFunc onClose={toggleModal}>
          <h1>Контент модалки</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
            eveniet?
          </p>
          <button type="button" onClick={toggleModal}>
            Закрыть
          </button>
        </ModalFunc>
      )}
    </>
  );
};

class App2 extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const parsedTodos = JSON.parse(localStorage.getItem('todos'));
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, { completed }) => (completed ? acc + 1 : acc), 0);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const completedTodos = this.calculateCompletedTodos();
    const filteredTodos = this.getVisibleTodos();
    return (
      <>
        <h1>Состояние компонента</h1>
        <div>
          <p>Общее кол-во: {todos.length}</p>
          <p>Кол-во выполненных: {completedTodos}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />
        {/* <Form2 onSubmit={this.formSubmitHandler} /> */}

        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          ontoggleCompleted={this.toggleCompleted}
        />
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Контент модалки</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
              eveniet?
            </p>
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button>
          </Modal>
        )}
      </>
    );
  }
}

export { App, App2 };
