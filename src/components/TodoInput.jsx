import logo from '../assets/logo.png';

export default function TodoInput() {
  return (
    <>
      <a href="#" className="flex items-center justify-center">
        <img src={logo} alt="logo" className="w-1/3 h-auto" />
      </a>
      <div className="flex items-center justify-center m-10">
        <input type="text" name="input" className="w-screen bg-[#303030] p-2 rounded-sm mr-3 shadow-inner" />
        <button type="button" className="bg-[#D4C321] text-black p-2 rounded-sm shadow-inner">
          Submit
        </button>
      </div>
    </>
  );
}
