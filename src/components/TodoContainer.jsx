import TodoItem from './TodoItem';

export default function TodoContainer() {
  return (
    <>
      <div className="w-full p-6 rounded-md bg-[#303030]">
        <div className="flex justify-center mb-6">
          <p>Sort by:</p>
          <button type="button" className=" text-white px-1 rounded-sm shadow-inner hover:bg-[#9B8E14] transition mx-1">
            Task
          </button>
          <button type="button" className="bg-[#D4C321] text-black px-1 rounded-sm shadow-inner hover:bg-[#9B8E14] transition">
            Completed
          </button>
        </div>
        <button type="button" className="bg-[#D4C321] text-black px-1 rounded-sm shadow-inner hover:bg-[#9B8E14] transition">
          Clear All
        </button>
        <TodoItem />
      </div>
    </>
  );
}
