import { useState } from 'react';
import logo from '../assets/logo.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
export default function TodoInput({ addTask }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddNewTodo = (e) => {
    if (newTodo === '') {
      toast.error('Eh, sorry ini gaboleh kosong! 🙏', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        closeOnClick: true,
        theme: 'dark',
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });
      e.preventDefault();
    } else {
      toast.success('Data berhasil disimpan! 👌', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        closeOnClick: true,
        theme: 'dark',
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        hideProgressBar: true,
      });
      e.preventDefault();
      addTask(newTodo);
      setNewTodo('');
    }
  };

  return (
    <>
      <div className="lg:flex lg:mb-8">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-1/3 h-auto lg:w-[50%] md:w-[25%]" />
        </div>
        <form onSubmit={handleAddNewTodo} className="flex items-center justify-center m-10 lg:w-[60%] lg:m-5">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
            placeholder="Mau ngapain hari ini?"
            className="w-svw bg-[#303030] p-2 rounded-sm mr-3 shadow-inner outline-none"
          />
          <button type="button" onClick={handleAddNewTodo} className="bg-[#D4C321] text-black p-2 rounded-sm shadow-inner hover:bg-[#9B8E14] transition">
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}
