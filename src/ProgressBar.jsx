import React from 'react';

const ProgressCard = () => {
  const progress = 76.98;

  return (
    <div className="bg-[#0F1B3D] rounded-xl p-6 w-full max-w-md shadow-md">
      <h2 className="text-white text-lg font-bold mb-2">Progress</h2>
      <p className="text-yellow-400 text-3xl font-bold mb-4">{progress}%</p>
      
      <div className="w-full bg-[#1D294D] h-4 rounded-full overflow-hidden">
        <div
          className="bg-[#6B3FA0] h-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-white text-sm mt-2 truncate">Web Systems...</p>
    </div>
  );
};

export default ProgressCard;
