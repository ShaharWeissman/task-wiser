import React, { useEffect } from 'react';
import { Todo } from '../types/todo';

type Props = { addTodo: (todo: Todo) => void };
// a form to create todos
function AppForm(props: Props) {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [dueDate, setDueDate] = React.useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    if (!props.addTodo) {
      console.log('oops! addTodo is undefined');
      return;
    }

    if (!title || !description || !dueDate) {
      console.log('oops! empty values');
      return;
    }
    
    //check if dueDate is a valid date
    if (isNaN(Date.parse(dueDate))) {
      console.log('oops! invalid date');
      return;
    }

    const todo: Todo = {
      title,
      description,
      dueDate: new Date(dueDate),
      isDone: false,
      id: Math.random().toString(),
    };

    props.addTodo(todo);
    //reset form values
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  useEffect(() => {
    console.log('🚀 ~ file: AppForm.tsx:19 ~ useEffect ~ dueDate:', dueDate);
  }, [dueDate]);

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="dueDate">Due Date</label>
      <input
        type="date"
        name="dueDate"
        id="dueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AppForm;
