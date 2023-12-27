import { useState } from 'react';
import './app.css';
import TodoContainer from './components/TodoContainer';
import TodoInput from './components/TodoInput';
export default function App() {
  const [allTodos, setAllTodos] = useState([]);

  const addTask = (newTask) => {
    let objTask = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };
    setAllTodos([...allTodos, objTask]);
  };

  return (
    <>
      <TodoInput addTask={addTask} />
      <TodoContainer allTodos={allTodos} />
    </>
  );
}
