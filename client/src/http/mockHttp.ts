// mock a server

import { Todo } from '../types/todo';

const todos: Todo[] = [ //HSGHGH
  {
    id: '1',
    title: 'todo 1',
    description: 'todo 1 description',
    dueDate: new Date(),
    isDone: false,
  },
  {
    id: '2',
    title: 'todo 2',
    description: 'todo 2 description',
    dueDate: new Date(),
    isDone: false,
  },
  {
    id: '3',
    title: 'todo 3',
    description: 'todo 3 description',
    dueDate: new Date(),
    isDone: false,
  },
];

// 1. get all todos
export const getAllTodos = async () => {
  return structuredClone(todos);
};

// 2. get a todo by id
export const getTodoById = async (id: string) => {
  return todos.find((todo) => todo.id === id);
};

// 3. create a new todo
export const createTodo = async (todo: Todo) => {
  return todos.push(todo);
};

// 4. update a todo
export const updateTodo = async (id: string, todo: Todo) => {
  const index = todos.findIndex((todo) => todo.id === id);
  todos[index] = todo;
  return todos[index];
};

// 5. delete a todo
export const deleteTodo = async (id: string) => {
  const index = todos.findIndex((todo) => todo.id === id);
  todos.splice(index, 1);
};

// 6. delete all todos
export const deleteAllTodos = async () => {
  todos.splice(0, todos.length);
};
