import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

const widgets = ["Sticky Note", "Clock", "Weather"];

function DragAndDrop() {
  const [positions, setPositions] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const nodeRef = useRef(null);

  function handleStop(e, data) {
    let dummyPositions = { ...positions };
    let itemId = e.target.id;
    dummyPositions[itemId] = {};
    dummyPositions[itemId].x = data.x;
    dummyPositions[itemId].y = data.y;
    setPositions(dummyPositions);
  }

  useEffect(() => {
    const existingDivPositions = JSON.parse(
      window.localStorage.getItem("POSITIONS_DIV")
    );
    setPositions(existingDivPositions);
    setHasLoaded(true);
    // console.log(existingDivPositions);
    // console.log(`has loaded`);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("POSITIONS_DIV", JSON.stringify(positions));
  }, [positions]);

  return hasLoaded ? (
    <div className="static min-h-screen">
      {widgets.map((item) => {
        return (
          <Draggable
            defaultPosition={
              positions === null || !positions[widgets.lastIndexOf(item) + 1]
                ? { x: 300, y: 100 }
                : {
                    x: positions[widgets.lastIndexOf(item) + 1].x,
                    y: positions[widgets.lastIndexOf(item) + 1].y,
                  }
            }
            bounds={{
              // widgets.lastIndexOf(item) is the index position of 'item' widget
              left: 0,
              top: 44 - 44 * (widgets.lastIndexOf(item) + 1),
              right: window.innerWidth - 344,
              bottom: window.innerHeight - 44 - 44 * widgets.lastIndexOf(item),
            }}
            position={null}
            key={widgets.lastIndexOf(item) + 1}
            nodeRef={nodeRef}
            onStop={handleStop}
          >
            <div ref={nodeRef}>
              <div
                className="relative bg-blue-300 p-2 w-80 m-1 cursor-move"
                id={widgets.lastIndexOf(item) + 1}
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
