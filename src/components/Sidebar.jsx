// import React from "react";
// import { FiPlus, FiHeart, FiStar } from "react-icons/fi";

// import SidebarButton from "./SidebarButton";

// function Sidebar() {
//   return (
//     <div className="fixed left-4 top-32 flex flex-col space-y-1">
//       <SidebarButton Icon={FiPlus} label="Sticky Note" />
//       <SidebarButton Icon={FiStar} label="Clock" />
//       <SidebarButton Icon={FiHeart} label="Weather" />
//     </div>
//   );
// }

// export default Sidebar;

import React, { useState } from "react";
import { FiPlus, FiHeart, FiStar } from "react-icons/fi";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SidebarButton from "./SidebarButton";
import SortableItem from "./SortableItem";

function Sidebar() {
  const [widgetButtons, setwidgetButtons] = useState([
    <SidebarButton Icon={FiPlus} label="Sticky Note" />,
    <SidebarButton Icon={FiStar} label="Clock" />,
    <SidebarButton Icon={FiHeart} label="Weather" />,
  ]);

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="fixed left-4 top-32 flex flex-col space-y-1">
        <SortableContext
          items={widgetButtons}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable hook */}
          {widgetButtons.map((widgetButton) => (
            <SortableItem key={widgetButton} id={widgetButton} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log(`ACTIVE: ${active.id}`);
    console.log(`OVER :${over.id}`);

    if (active.id !== over.id) {
      setwidgetButtons((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
        // items: [2, 3, 1]   0  -> 2
        // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1]
      });
    }
  }
}

export default Sidebar;
