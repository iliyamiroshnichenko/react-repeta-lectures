import ColorPicker from './components/ColorPicker';
import TodoEditorFunc from './components/TodoEditor/TodoEditor';
import Counter from './components/Counter';
import ModalFunc from './components/Modal/Modal';
import Dropdown from './components/Dropdown';
import { useState } from 'react';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import shortid from 'shortid';
import Filter from './components/Filter/Filter';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const App = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(prState => !prState);
  };

  return (
    <>
      <h1>Состояние компонента</h1>
      {/* <Dropdown /> */}
      <Counter />
      {/* <ColorPicker options={colorPickerOptions} /> */}

      <div>
        {/* <p>Общее кол-во: {todos.length}</p>
        <p>Кол-во выполненных: {completedTodos}</p> */}
      </div>

      <button type="button" onClick={toggleModal}>
        Add todo
      </button>
      <Filter />
      <TodoList />
      {modal && (
        <ModalFunc onClose={toggleModal}>
          <TodoEditorFunc />
        </ModalFunc>
      )}
    </>
  );
};

export default App;
