// import React, { useState } from "react";
// import Draggable from "react-draggable";

// function DragAndDrop({ items }) {
//   const [list, setList] = useState(items);

//   const handleDrag = (index, newPosition) => {
//     setList((prevList) => {
//       const newList = [...prevList];
//       newList[index].position = newPosition;
//       return newList;
//     });
//   };

//   return (
//     <div>
//       {list.map((item, index) => (
//         <Draggable
//           key={index}
//           defaultPosition={item.position}
//           onStop={(event, data) => handleDrag(index, data.x, data.y)}
//         >
//           <div>{item.content}</div>
//         </Draggable>
//       ))}
//     </div>
//   );
// }

// export default DragAndDrop;

import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

const texts = ["Widget 1", "Widget 2", "Widget 3"];

function DragAndDrop() {
  const [positions, setPositions] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const existingDivPositions = JSON.parse(
      localStorage.getItem("positions_div")
    );
    setPositions(existingDivPositions);
    setHasLoaded(true);
    console.log(existingDivPositions);
    console.log("has loaded");
  }, []);

  function handleStop(e, data) {
    const dummyPositions = { ...positions };
    const itemId = e.target.id;
    dummyPositions[itemId] = {};
    dummyPositions[itemId].x = data.x;
    dummyPositions[itemId].y = data.y;
    setPositions(dummyPositions);
  }

  useEffect(() => {
    localStorage.setItem(`positions_div`, JSON.stringify(positions));
  }, [positions]);

  return hasLoaded ? (
    <div className="relative border-4 border-orange">
      {texts.map((item) => {
        return (
          <Draggable
            defaultPosition={
              positions === null
                ? { x: 0, y: 0 }
                : !positions[item[7]]
                ? { x: 0, y: 0 }
                : { x: positions[item[7]].x, y: positions[item[7]].y }
            }
            position={null}
            key={item[7]}
            nodeRef={nodeRef}
            onStop={handleStop}
          >
            <div ref={nodeRef}>
              <div
                className="relative bg-darkblue p-2 w-2/5 m-1 cursor-move"
                id={item[7]}
              >
                {item}
              </div>
            </div>
          </Draggable>
        );
      })}{" "}
    </div>
  ) : null;
}

export default DragAndDrop;
