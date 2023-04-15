import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

const widgets = ["Widget 1", "Widget 2", "Widget 3"];

function DragAndDrop() {
  const [positions, setPositions] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const nodeRef = useRef(null);

  function handleStop(e, data) {
    const dummyPositions = { ...positions };
    const itemId = e.target.id;
    dummyPositions[itemId] = {};
    dummyPositions[itemId].x = data.x;
    dummyPositions[itemId].y = data.y;
    setPositions(dummyPositions);
  }

  useEffect(() => {
    const existingDivPositions = JSON.parse(
      window.localStorage.getItem("positions_div")
    );
    setPositions(existingDivPositions);
    setHasLoaded(true);
    console.log(existingDivPositions);
    console.log(`has loaded`);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(`positions_div`, JSON.stringify(positions));
  }, [positions]);

  return hasLoaded ? (
    <div className="static min-h-screen border-8">
      {widgets.map((item) => {
        return (
          <Draggable
            defaultPosition={
              positions === null || !positions[item[7]]
                ? { x: 300, y: 100 }
                : { x: positions[item[7]].x, y: positions[item[7]].y }
            }
            position={null}
            bounds={{
              // item[7] is literally the Widget "#", e.g. 1, 2, 3
              // not optimal way to do this, will find better solution later
              left: 0,
              top: 60 - 60 * item[7],
              right: window.innerWidth - 320 * (item[7] - 1), // needs tweeking
              bottom: window.innerHeight - 60 - 60 * (item[7] - 1),
            }}
            key={item[7]}
            nodeRef={nodeRef}
            onStop={handleStop}
          >
            <div ref={nodeRef}>
              <div
                className="relative bg-blue-300 p-2 w-80 m-1 cursor-move"
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
