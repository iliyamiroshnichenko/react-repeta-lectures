import { useState, useEffect, Component } from 'react';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import { TodoEditor, TodoEditorFunc } from './components/TodoEditor/TodoEditor';
// import shortid from 'shortid';
import Filter from './components/Filter/Filter';
import { Modal, ModalFunc } from './components/Modal/Modal';
// import Tabs from './components/Tabs/Tabs';
// import tabs from './tabs.json';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
import todosApi from './services/todos.api';

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    todosApi
      .fetchTodos()
      .then(todos => setTodos(todos))
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('todosHook', JSON.stringify(todos));
  // }, [todos]);

  const addTodo = text => {
    if (!text) {
      alert('Введите текст');
    }
    const newTodo = {
      text,
      completed: false,
    };
    todosApi.addtodo(newTodo).then(todo => {
      setTodos(prState => [...prState, todo]);
      toggleModal();
    });
  };

  const deleteTodo = todoId =>
    todosApi
      .deleteTodo(todoId)
      .then(() =>
        setTodos(prState => prState.filter(({ id }) => id !== todoId)),
      );

  const toggleCompleted = todoId => {
    const todo = todos.find(({ id }) => id === todoId);
    const { completed } = todo;
    const update = {
      completed: !completed,
    };

    todosApi
      .updateTodo(todoId, update)
      .then(updTodo =>
        setTodos(prState =>
          prState.map(todo => (todo.id === updTodo.id ? updTodo : todo)),
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

      <IconButton onClick={toggleModal} aria-label="Add todo">
        <AddIcon width="40" height="40" fill="#fff" />
      </IconButton>
      <div>
        <p>Общее кол-во: {todos.length}</p>
        <p>Кол-во выполненных: {completedTodos}</p>
      </div>
      <Filter value={filter} onChange={changeFilter} />
      <TodoList
        todos={filteredTodos}
        onDeleteTodo={deleteTodo}
        ontoggleCompleted={toggleCompleted}
      />
      {modal && (
        <ModalFunc onClose={toggleModal}>
          <TodoEditorFunc onSubmit={addTodo} />
        </ModalFunc>
      )}
    </>
  );
};

class App2 extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    todosApi
      .fetchTodos()
      .then(todos => this.setState({ todos }))
      .catch(err => console.log(err));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextTodos = this.state.todos;
  //   const prevTodos = prevState.todos;
  //   // if (nextTodos !== prevTodos) {
  //   //   localStorage.setItem('todos', JSON.stringify(nextTodos));
  //   // }

  //   if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
  //     this.toggleModal();
  //   }
  // }

  addTodo = text => {
    if (!text) {
      alert('Введите текст');
    }
    const newTodo = {
      text,
      completed: false,
    };

    todosApi.addtodo(newTodo).then(todo => {
      this.setState(({ todos }) => ({ todos: [...todos, todo] }));
      this.toggleModal();
    });
  };

  deleteTodo = todoId => {
    todosApi.deleteTodo(todoId).then(() => {
      this.setState(prevState => ({
        todos: prevState.todos.filter(({ id }) => id !== todoId),
      }));
    });
  };

  toggleCompleted = todoId => {
    const todo = this.state.todos.find(({ id }) => id === todoId);
    const { completed } = todo;
    const update = {
      completed: !completed,
    };
    todosApi.updateTodo(todoId, update).then(updTodo =>
      this.setState(({ todos }) => ({
        todos: todos.map(todo => (todo.id === updTodo.id ? updTodo : todo)),
      })),
    );
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
        <IconButton onClick={this.toggleModal} aria-label="Add todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
        <div>
          <p>Общее кол-во: {todos.length}</p>
          <p>Кол-во выполненных: {completedTodos}</p>
        </div>

        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          ontoggleCompleted={this.toggleCompleted}
        />
        {/* <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
      </>
    );
  }
}

export { App, App2 };
