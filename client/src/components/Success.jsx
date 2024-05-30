// Success.js

import React from 'react';

const Success = ({ message }) => {
  return (
    <div className="bg-green-500 text-white font-bold rounded-md px-4 py-2">
      {message}
    </div>
  );
};

export default Success;
