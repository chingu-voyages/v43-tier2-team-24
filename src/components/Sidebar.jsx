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
    const { active, over } = event;

    if (active.id !== over.id) {
      setwidgetButtons((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
        // items: [2, 3, 1]   0  -> 2
        // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1]
      });
    }
  }
}

export default Sidebar;
