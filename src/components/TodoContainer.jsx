/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';
import { toast } from 'react-toastify';

export default function TodoContainer(allTodos) {
  console.log(allTodos.allTodos.length);
  const handleClearAll = () => {
    toast.warn(
      <div className="text-center">
        <p>Semua data bakal dihapus, yakin?</p>
        <div className="flex h-9 justify-evenly mt-2">
          <button type="button" onClick={() => handleYes()} className="bg-[#D4C321] text-black px-3 rounded-sm shadow-inner hover:bg-[#9B8E14] transition">
            Iya!
          </button>
          <button type="button" onClick={() => handleNo()} className="bg-[#D4C321] text-black  px-3 rounded-sm shadow-inner hover:bg-[#9B8E14] transition">
            Ga!
          </button>
        </div>
      </div>,
      {
        icon: false,
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
        closeOnClick: true,
        theme: 'dark',
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        hideProgressBar: true,
      }
    );
  };

  const handleYes = () => {
    localStorage.clear();
    // setAllTodos.setAllTodos([]);
    location.reload();
  };
  const handleNo = () => {
    toast.success('Data gajadi dihapus! 👌', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
      closeOnClick: true,
      theme: 'dark',
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      hideProgressBar: true,
    });
  };
  return (
    <>
      <div className="w-full p-6 rounded-md bg-[#303030]">
        <div className="flex justify-center mb-6">
          <p>Sort by:</p>
          <button type="button" className="bg-[#D4C321] text-black px-1 rounded-sm shadow-inner hover:bg-[#9B8E14] transition mx-1">
            Task
          </button>
          <button type="button" className=" text-white px-1 rounded-sm shadow-inner hover:bg-[#9B8E14] transition">
            Completed
          </button>
        </div>
        <button type="button" onClick={handleClearAll} className="bg-[#D4C321] text-black px-1 rounded-sm shadow-inner hover:bg-[#9B8E14] transition">
          Clear All
        </button>
        {allTodos.allTodos.length !== 0
          ? allTodos.allTodos.map((todo) => {
              return <TodoItem key={todo.id} task={todo.task} />;
            })
          : null}
      </div>
    </>
  );
}
