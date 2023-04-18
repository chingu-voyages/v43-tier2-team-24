import React from "react";
import cottage from "../assets/img/cottage.mp4";

function Background() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        id="cottageVideo"
        className="fixed bg-cover object-cover h-full w-full top-0 bottom-0 left-0 right-0 block z-0"
      >
        <source src={cottage} type="video/mp4" />
      </video>
    </div>
  );
}

export default Background;
