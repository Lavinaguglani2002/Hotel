import React, { useState } from 'react';
import Home from './Navbar';
import Footer from './Footer';

const Location = () => {
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(true);
    setTimeout(() => setShowMap(false), 1000); // Hide map after 1 second (1000ms)
  };

  return (
    <div>
      <Home />
      <div className="relative w-full h-96 sm:h-screen overflow-hidden"> {/* Set a specific height for the map container */}
        <div
          className={`absolute inset-0 bg-black opacity-50 transition-transform transform ${
            showMap ? 'translate-x-0' : 'translate-x-full'
          }`}
        ></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.402935201927!2d74.94386327451159!3d30.22558407483285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39173390e9022a71%3A0x80a6e40c1f705d30!2sKhatu%20Ji%20Vaishnu%20Dhaba!5e0!3m2!1sen!2sin!4v1713632597246!5m2!1sen!2sin"
          width="100%"  
          height="100%" 
          className="border-0 absolute inset-0"
          allowFullScreen="" 
          loading="lazy"
          title="Location Map" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {!showMap && (
          <button
            className="absolute right-0 bg-blue-500 text-white py-2 px-4 rounded-l-md"
            onClick={handleShowMap}
          >
            Show Location
          </button>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Location;
