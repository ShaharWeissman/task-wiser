import { useEffect, useState } from 'react';
import './App.css';
import AppForm from './components/AppForm';
import { Todo } from './types/todo';
import Card from './components/Card';
import { createTodo, deleteTodo, getAllTodos, updateTodo } from './http';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getAllTodos().then((todos) => setTodos(todos));
  }, []);

  const toggleDone = (id: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('🚀 ~ file: App.tsx:17 ~ return ~ event:', event);
      todos.forEach((todo) => {
        if (todo.id === id) {
          updateTodo(id, todo).then(() => {
            getAllTodos().then((todos) => setTodos(todos));
          });
        }
      });
    };
  };

  const removeTodo = (id: string) => {
    deleteTodo(id).then(() => {
      console.log('deleted');
      getAllTodos().then((todos) => {
        setTodos(todos);
      });
    });
  };

  const addTodo = (todo: Todo) => {
    createTodo(todo).then(() => {
      getAllTodos().then((todos) => setTodos(todos));
    });
  };

  return (
    <main className="main">
      <AppForm addTodo={addTodo} />

      <ul className="todos">
        {todos.map((todo) => (
          <Card key={todo.id} {...todo} removeTodo={removeTodo} toggleDone={toggleDone(todo.id)} />
        ))}
      </ul>
    </main>
  );
}

export default App;
