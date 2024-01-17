import { FaCheckCircle } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { RiEditBoxFill } from 'react-icons/ri';

// eslint-disable-next-line react/prop-types
export default function TodoItem({ id, task }) {
  const handleDelete = () => {
    const items = JSON.parse(localStorage.getItem('todolist'));
    const filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem('todolist', JSON.stringify(filteredItems));
    location.reload();
  };

  const handleCompleted = () => {
    const items = JSON.parse(localStorage.getItem('todolist'));
    items.map((item) => {
      if (item.id === id) {
        item.completed = true;
      }
    });
    localStorage.setItem('todolist', JSON.stringify(items));
    location.reload();
  };
  return (
    <>
      <ul className="w-full  mt-3">
        <li className="flex bg-[#2B2B2B] p-2 mb-3 rounded-sm">
          <button type="button" className="mr-3">
            <FaCheckCircle title="Completed?" className="text-[#D4C321] transition ease-in transform hover:scale-110" onClick={handleCompleted} />
          </button>
          <div className="w-full mx-2">
            <p>{task}</p>
          </div>
          <button type="button" className="mr-3">
            <RiEditBoxFill title="Edit?" className="text-[#F27400] transition ease-in transform hover:scale-110" />
          </button>
          <button type="button" className="mr-3" onClick={handleDelete}>
            <FaTrash title="Delete?" className="text-[#FF0000] transition ease-in transform hover:scale-110" />
          </button>
        </li>
      </ul>
    </>
  );
}
