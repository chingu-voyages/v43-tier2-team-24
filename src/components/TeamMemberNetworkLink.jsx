import React from "react";

import { FiLinkedin, FiGithub } from "react-icons/fi";

const networkData = {
  linkedin: {
    style: "text-blue-600 hover:text-blue-800 transition",
    Icon: FiLinkedin,
  },
  github: {
    style: "text-white hover:text-gray-400 transition",
    Icon: FiGithub,
  },
};

function TeamMemberNetworkLink({ link, platformName }) {
  const validNetwork = networkData[platformName];

  if (!validNetwork) {
    return null;
  }

  const { style, Icon } = validNetwork;

  return (
    <a href={link} target="_blank" rel="noreferrer noopener" className={style}>
      <Icon className="w-5 h-5" />
    </a>
  );
}

export default TeamMemberNetworkLink;
