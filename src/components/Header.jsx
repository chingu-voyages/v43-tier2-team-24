import React from "react";

import HeaderButton from "./HeaderButton";

function Header() {
  return (
    <header
      className="absolute min-w-full
      h-20 flex justify-between items-center gap-5 px-8"
    >
      <div className="flex self-center gap-x-5"></div>
      <div>
        <h1 className="text-3xl font-bold">Team Name</h1>
      </div>
      <div className="flex self-center gap-x-5">
        <HeaderButton label="Settings" />
        <HeaderButton label="Background" />
      </div>
    </header>
  );
}

export default Header;
