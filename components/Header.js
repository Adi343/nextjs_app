import { useState } from "react";
import CreateModal from "./CreateModal";
export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  const handleCreate = () => {
    setOpenModal(true);
  };
  return (
    <div className="flex justify-between justify-items-center min-h-3 bg-green-300">
      <div className="flex p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <span className="font-semibold ">Flash Cards</span>
      </div>
      <button
        className="p-1 m-1 bg-red-400 hover:bg-red-500 rounded-md font-semibold shadow-md"
        onClick={handleCreate}
      >
        Create Card
      </button>
      {openModal && (
        <div className="bg-blue-200 inset-0">
          <h3>Inside Modal</h3>
        </div>
      )}
    </div>
  );
}
