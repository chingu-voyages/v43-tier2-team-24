import React from "react";

import { FiLinkedin, FiGithub } from "react-icons/fi";

import TeamMemberNetworkLink from "./TeamMemberNetworkLink";

function TeamMemberInfo({ member }) {
  return (
    <li className="flex items-center justify-center space-x-2">
      <span>{member.name}</span>
      {member.alias && <span className="text-gray-400">({member.alias})</span>}
      {member.linkedin && (
        <TeamMemberNetworkLink link={member.linkedin} platformName="linkedin" />
      )}
      {member.github && (
        <TeamMemberNetworkLink link={member.github} platformName="github" />
      )}
    </li>
  );
}

export default TeamMemberInfo;
