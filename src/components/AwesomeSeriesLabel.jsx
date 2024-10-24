import React from 'react';
import { FaCaretUp } from 'react-icons/fa'; // Importing the caret up icon

const AwesomeSeriesLabel = () => {
  return (
    <div
      className="inline-flex items-center space-x-2 px-4 py-1 rounded-full border-2"
      style={{
        borderColor: '#3A3358', 
      }}
    >
      <span
        className="text-xs font-bold"
        style={{ color: '#3A3358' }} 
      >
        AWESOME SERIES
      </span>
      <FaCaretUp
        className="text-sm"
        style={{ color: '#3A3358' }} 
      />
    </div>
  );
};

export default AwesomeSeriesLabel;
