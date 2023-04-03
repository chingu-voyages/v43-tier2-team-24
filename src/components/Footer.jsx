import React from "react";

import TeamMemberInfo from "./TeamMemberInfo";

import teamMembers from "../data/teamData.json";
import { displayName } from "../data/appMetadata.json";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="font-semibold text-xl">{displayName}</div>
        </div>
        <h2 className="flex justify-center text-xl mt-6 text-gray-400">
          Team Members:
        </h2>
        <ul className="mt-2 space-y-2">
          {teamMembers.map((member, index) => (
            <TeamMemberInfo key={index} member={member} />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
