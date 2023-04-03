import React from "react";
import { FiPlus, FiHeart, FiStar } from "react-icons/fi";

import SidebarButton from "./SidebarButton";

function Sidebar() {
  return (
    <div className="fixed left-4 top-32 flex flex-col space-y-1">
      <SidebarButton Icon={FiPlus} label="Sticky Note" />
      <SidebarButton Icon={FiStar} label="Clock" />
      <SidebarButton Icon={FiHeart} label="Weather" />
    </div>
  );
}

export default Sidebar;
