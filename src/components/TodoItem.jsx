import checkbox from '../assets/checkboxIcon.svg';

export default function TodoItem() {
  return (
    <>
      <ul className="w-full  mt-3">
        <li className="flex bg-[#2B2B2B] p-2 mb-3 rounded-sm">
          <button type="button" className="mr-3">
            <img src={checkbox} alt="checkbox" />
          </button>
          <p>Go to gym</p>
        </li>
        <li className="flex bg-[#2B2B2B] p-2">
          <button type="button" className="mr-3">
            <img src={checkbox} alt="checkbox" />
          </button>
          <p>Go to gym</p>
        </li>
      </ul>
    </>
  );
}
