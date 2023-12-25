import { FaCheckCircle } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { RiEditBoxFill } from 'react-icons/ri';

export default function TodoItem() {
  return (
    <>
      <ul className="w-full  mt-3">
        <li className="flex bg-[#2B2B2B] p-2 mb-3 rounded-sm">
          <button type="button" className="mr-3">
            <FaCheckCircle title="Completed?" className="text-[#D4C321] transition ease-in transform hover:scale-110" />
          </button>
          <div className="w-full mx-2">
            <p>Go to gym</p>
          </div>
          <button type="button" className="mr-3">
            <RiEditBoxFill title="Edit?" className="text-[#F27400] transition ease-in transform hover:scale-110" />
          </button>
          <button type="button" className="mr-3">
            <FaTrash title="Delete?" className="text-[#FF0000] transition ease-in transform hover:scale-110" />
          </button>
        </li>
      </ul>
    </>
  );
}
