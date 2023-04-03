import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import GenericButton from "./GenericButton";
import Modal from "./Modal";

function Header() {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showBackgroundModal, setShowBackgroundModal] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  return (
    <>
      {!hideHeader && (
        <nav className="sticky top-0 z-30 shadow-md py-3 bg-slate-700">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div>
              {/* Left side buttons can be added here if we ever need them */}
            </div>
            <h1 className="font-semibold text-xl text-white">V43-T2-Team24</h1>
            <div className="flex space-x-4">
              <GenericButton
                label="Settings"
                onClick={() => setShowSettingsModal(true)}
              />
              <GenericButton
                label="Background"
                onClick={() => setShowBackgroundModal(true)}
              />
            </div>
          </div>
        </nav>
      )}
      <button
        type="button"
        className="fixed right-6 top-6 transition-all duration-300 z-40"
        onClick={() => {
          setHideHeader(!hideHeader);
        }}
      >
        {hideHeader ? (
          <FiChevronDown size="2rem" color="black" />
        ) : (
          <FiChevronUp size="2rem" color="white" />
        )}
      </button>
      <Modal
        title="Settings"
        show={showSettingsModal}
        onHide={() => setShowSettingsModal(false)}
      >
        <h3>Epic Settings Test!</h3>
      </Modal>
      <Modal
        title="Background"
        show={showBackgroundModal}
        onHide={() => setShowBackgroundModal(false)}
      >
        <h3>Epic Background Test!</h3>
      </Modal>
    </>
  );
}

export default Header;
