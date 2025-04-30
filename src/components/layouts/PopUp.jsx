import React, { useState } from "react";

const ImportantNotePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-lg font-bold !px-1 !py-1 rounded-lg shadow-lg hover:scale-105 transition cursor-pointer"
      >
        Important note!
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Popup Box */}
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              📢 Important Notice
            </h2>
            <p className="text-gray-600 !mb-6 !p-4">
              Dear Concerned, <br/>I’m currently working full-time on a product with
              a very tight client deadline, which often requires late sittings
              and weekend work. Because of this, I couldn’t find enough time to
              complete the task properly. I managed to do a basic version in the
              2–3 hours I had, just to honor the commitment and avoid missing
              the submission. This is not a complete reflection of my skills —
              you can better judge those through my past projects or in an
              interview.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white !px-4 !py-2 rounded hover:bg-blue-700 transition !mb-2"
            >
              Close!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImportantNotePopup;
