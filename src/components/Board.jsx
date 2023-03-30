import React from "react";

import WidgetButton from "./WidgetButton";

function Board() {
  return (
    <div className="min-h-screen">
      <aside className="absolute flex flex-col max-w-xl bg-red-500 left-2 top-20 rounded-lg">
        <WidgetButton label="Widget 1" />
        <WidgetButton label="Widget 2" />
        <WidgetButton label="Widget 3" />
      </aside>
      <main className="bg-gray-300 h-screen min-w-full">Board</main>
    </div>
  );
}

export default Board;
