"use client";
const Counter = ({ counter, setCounter, max }) => {
  const increment = () => {
    if (counter < max) setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  return (
    <div className="flex items-center justify-between w-36 border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm">
      <button
        className="text-xl font-bold text-[#8B2C2C] hover:text-[#641B1B] cursor-pointer"
        onClick={decrement}
      >
        −
      </button>
      <span className="text-lg font-medium text-[#1C1C1C]">{counter}</span>
      <button
        className="text-xl font-bold text-[#8B2C2C] hover:text-[#641B1B] cursor-pointer"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
