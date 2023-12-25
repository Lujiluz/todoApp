import logo from '../assets/logo.png';

export default function TodoInput() {
  return (
    <>
      <div className="lg:flex lg:mb-8">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-1/3 h-auto lg:w-[50%] md:w-[30%]" />
        </div>
        <div className="flex items-center justify-center m-10 lg:w-[60%] lg:m-5">
          <input type="text" name="input" className="w-svw bg-[#303030] p-2 rounded-sm mr-3 shadow-inner outline-none" placeholder="Mau ngapain hari ini?" />
          <button type="button" className="bg-[#D4C321] text-black p-2 rounded-sm shadow-inner hover:bg-[#9B8E14] transition">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
