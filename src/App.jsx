import { useEffect, useState } from 'react';
import './app.css';
import TodoContainer from './components/TodoContainer';
import TodoInput from './components/TodoInput';

// get data from local Storage

const getDataFromLocalStorage = () => {
  let storedData = localStorage.getItem('todolist');
  console.log(storedData);

  if (storedData) return JSON.parse(localStorage.getItem('todolist'));
  return [];
};
export default function App() {
  const [allTodos, setAllTodos] = useState(getDataFromLocalStorage);

  // usEffect buat add data ke local Storage
  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(allTodos));
  }, [allTodos]);

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
