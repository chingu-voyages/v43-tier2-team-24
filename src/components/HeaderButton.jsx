import React from "react";

function HeaderButton({ label, onClick }) {
  return (
    <button
      type="button"
      className="bg-slate-700 px-3 py-2 rounded-md hover:bg-slate-500 transition"
    >
      <span className="text-white">{label}</span>
    </button>
  );
}

export default HeaderButton;
