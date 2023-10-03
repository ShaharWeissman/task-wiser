import { ChangeEventHandler } from 'react';
import { Todo } from '../types/todo';

type Props = Todo & {
  removeTodo: (id: string) => void;
  toggleDone: ChangeEventHandler<HTMLInputElement>;
};

function Card(props: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <button
        onClick={() => {
          if (!props.removeTodo) {
            console.warn('oops! removeTodo is undefined');
            return;
          }

          props.removeTodo(props.id);
        }}
      >
        X
      </button>
      <h3 className="title">{props.title.toLocaleUpperCase()}</h3>
      <p className="description">{props.description}</p>
      <p className="due-date">{props.dueDate.toISOString()}</p>
      <input
        type="checkbox"
        name={props.title}
        checked={props.isDone}
        onChange={props.toggleDone}
      />
    </div>
  );
}

export default Card;
