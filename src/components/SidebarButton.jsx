import React from "react";

function SidebarButton({ Icon, label, onClick }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="bg-red-200 hover:bg-red-400 p-2 rounded-full text-gray-600 focus:outline-none"
        onClick={onClick}
      >
        <Icon className="w-6 h-6" />
      </button>
      <span className="absolute left-0 translate-x-12 bottom-1/2 translate-y-1/2 text-xs text-red-200 opacity-0 group-hover:opacity-100 transition">
        {label}
      </span>
    </div>
  );
}

export default SidebarButton;
