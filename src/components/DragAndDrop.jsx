import React, { useState } from "react";
import Draggable from "react-draggable";

function DragAndDrop({ items }) {
  const [list, setList] = useState(items);

  const handleDrag = (index, newPosition) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[index].position = newPosition;
      return newList;
    });
  };

  return (
    <div>
      {list.map((item, index) => (
        <Draggable
          key={index}
          defaultPosition={item.position}
          onStop={(event, data) => handleDrag(index, data.x, data.y)}
        >
          <div>{item.content}</div>
        </Draggable>
      ))}
    </div>
  );
}

export default DragAndDrop;
