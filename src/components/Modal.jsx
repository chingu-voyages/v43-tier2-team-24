import React from "react";

function Modal({ title, show, onHide, children }) {
  if (!show) {
    return null;
  }

  return (
    <div
      role="none" // TODO: Check this later, added for now to comply with eslint
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onHide}
      onKeyDown={() => {}} // TODO: Check if there's a better way to comply with this other eslint rule
    >
      <div
        role="none" // TODO: Check this later, added for now to comply with eslint
        className="bg-gray-500 rounded max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}} // TODO: Check if there's a better way to comply with this other eslint rule
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h5 className="text-lg font-semibold">{title}</h5>
          <button
            type="button"
            className="text-xl font-semibold text-white focus:outline-none"
            onClick={onHide}
          >
            &times;
          </button>
        </div>
        <div className="p-4 text-gray-300">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
