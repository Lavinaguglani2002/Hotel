import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  const [animateFirst, setAnimateFirst] = useState(false);
  const [animateSecond, setAnimateSecond] = useState(false);

  const handleFirstImageClick = () => {
    setAnimateFirst(true);
    setAnimateSecond(false); // Reset animation for the second image
  };

  const handleSecondImageClick = () => {
    setAnimateSecond(true);
    setAnimateFirst(false); // Reset animation for the first image
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First card with image */}
        <div className={`bg-black rounded-lg overflow-hidden ${animateFirst ? 'animate-image' : ''}`} onClick={handleFirstImageClick}>
          <img
            src="https://i.gifer.com/Sfs.gif"
            alt="First Image"
            className="w-full h-96 object-cover"
          />
        </div>
        {/* Second card with image */}
        <div className={`bg-black rounded-lg overflow-hidden ${animateSecond ? 'animate-image' : ''}`} onClick={handleSecondImageClick}>
          <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"

            alt="Second Image"
            className="w-full h-96 object-cover"
          />
        </div>
        {/* Third card with text and button */}
        <div className="bg-black rounded-lg p-8 flex flex-col justify-between slide-down">
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-white"> Our Story</h3>
            <p className="text-lg text-gray-300 mb-8">Bathinda Haveli is an Indian Vegetarian Restaurant established in October 2020. Our aim is "Serve Pure Eat Pure".</p>
          </div>
          <div>
            <Link to="/about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
