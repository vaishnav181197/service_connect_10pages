import React from 'react'

function ToolBar() {
  return (
    <>
      <div className="w-full flex justify-center sticky bottom-0">
        <div className="sticky bottom-4 mx-auto my-5 rounded-lg h-fit bg-gray-600 text-white p-3 flex justify-around items-center w-11/12 max-w-md">
          <i className="fa-solid fa-house"></i>
          <i className="fa-solid fa-book-bookmark"></i>
          <i className="fa-solid fa-clock"></i>
          <i className="fa-solid fa-newspaper"></i>
          <i className="fa-solid fa-question"></i>
        </div>
      </div>
    </>
  );
}

export default ToolBar;


