import React from 'react'
import { LayoutGrid, Bookmark, History, NotebookPen, Plus, HelpCircle } from "lucide-react";

function ToolBar() {
  return (
    <>
      {/* <div className="w-full flex justify-center sticky bottom-0">
        <div className="sticky bottom-4 mx-auto my-5 rounded-lg h-fit bg-gray-600 text-white p-3 flex justify-around items-center w-11/12 max-w-md">
          <i className="fa-solid fa-house"></i>
          <i className="fa-solid fa-book-bookmark"></i>
          <i className="fa-solid fa-clock"></i>
          <i className="fa-solid fa-newspaper"></i>
          <i className="fa-solid fa-question"></i>
        </div>
      </div> */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] bg-[#6C625C] rounded-full px-6 py-3 shadow-2xl flex items-center justify-between">
        <button className="text-white"><LayoutGrid size={22} /></button>
        <button className="text-white"><Bookmark size={22} /></button>
        <button className="text-white"><History size={22} /></button>
        <button className="text-white"><NotebookPen size={22} /></button>
        <button className="text-white"><Plus size={26} /></button>
        <button className="text-white"><HelpCircle size={22} /></button>
      </div>
    </>
  );
}

export default ToolBar;


