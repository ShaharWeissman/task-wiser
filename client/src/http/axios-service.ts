// crud of todo with axios to localhost:5000/api/todos
// 1. get all todos
// 2. get a todo by id
// 3. create a new todo
// 4. update a todo
// 5. delete a todo
// 6. delete all todos
import axios from 'axios';
import { Todo } from '../types/todo';

const baseUrl = 'http://localhost:5000/api/todos';

// 1. get all todos
export const getAllTodos = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

// 2. get a todo by id
export const getTodoById = async (id: string) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

// 3. create a new todo
export const createTodo = async (todo: Todo) => {
  const response = await axios.post(baseUrl, todo);
  return response.data;
};

// 4. update a todo
export const updateTodo = async (id: string, todo: Todo) => {
  const response = await axios.put(`${baseUrl}/${id}`, todo);
  return response.data;
};

// 5. delete a todo
export const deleteTodo = async (id: string) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

// 6. delete all todos
export const deleteAllTodos = async () => {
  const response = await axios.delete(baseUrl);
  return response.data;
};
