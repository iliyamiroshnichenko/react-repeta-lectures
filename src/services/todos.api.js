import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchTodos = () => {
  return axios.get('/todos').then(({ data }) => data);
};

const addtodo = todo => {
  return axios.post('/todos', todo).then(({ data }) => data);
};

const deleteTodo = todoId => {
  return axios.delete(`/todos/${todoId}`);
};

const updateTodo = (todoId, update) => {
  return axios.patch(`/todos/${todoId}`, update).then(({ data }) => data);
};

export default { fetchTodos, addtodo, deleteTodo, updateTodo };
