import React from "react";

const defaultStyle = {
  bg: "bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500",
  text: "text-sm font-medium text-gray-900 hover:text-white",
  ring: "focus:ring-4 focus:outline-none focus:ring-purple-800",
};

function GenericButton({
  label,
  onClick,
  bgStyles = defaultStyle.bg,
  textStyles = defaultStyle.text,
  ringStyles = defaultStyle.ring,
}) {
  return (
    <button
      type="button"
      className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-lg group ${bgStyles} ${textStyles} ${ringStyles}`}
      onClick={onClick}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-500 rounded-md group-hover:bg-opacity-0">
        {label}
      </span>
    </button>
  );
}

export default GenericButton;
