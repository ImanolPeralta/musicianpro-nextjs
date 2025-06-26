"use client";

import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";

const GoBack = ({ className, ...props }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex items-center px-4 py-2 rounded-md font-semibold transition-colors duration-200
        bg-[#8B2C2C] text-[#F5EFE6] hover:bg-[#641B1B] focus:outline-none focus:ring-2 focus:ring-[#8B2C2C] cursor-pointer
        ${className ?? ""}
      `}
      {...props}
    >
      <HiArrowLeft className="mr-2 h-5 w-5" />
      Volver
    </button>
  );
};

export default GoBack;
