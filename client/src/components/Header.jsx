// import React from 'react';

// function Header() {
//   return (
//     <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url('C:\\Users\\Allied\\Desktop\\commerce\\client\\src\\components\\back.jpeg')` }}>
//       <div className="container mx-auto flex flex-col justify-center h-full">
//         <div className="mx-auto lg:mx-0 w-10/12 lg:w-2/5 text-center text-white">

//           {/* Header Text with Slide-in Animation and Blink Effect */}
//           <h1 className="text-7xl mb-4 animate-slidein-left animate-blink-text">Khatu Ji <span className='text-purple-600'>Vaishnu Dhaba</span></h1>

//           {/* Subtitle */}
//           <p className="text-2xl mb-8">Share your favorite travel destination and we will feature it in our next blog!</p>

//           {/* Button with Blink Effect */}
//           <div className='flex justify-center items-center'>
//             {/* Button with Blink Effect */}
//             <button className='rounded px-10 py-3 text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out animate-blink-button'><a href="/menu">Our Menu</a></button>
//             {/* Menu with Transition Effect */}
//             <span className='text-white mx-4 animate-menu-transition'>Explore Us</span>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
import React from 'react';

function Header() {
  return (
    <div className="relative overflow-hidden header h-screen">
      {/* Background Image */}
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 right-full w-full h-full" />

      {/* Content Container */}
      <div className="container mx-auto flex flex-col justify-center h-full">
        <div className="mx-auto lg:mx-0 w-10/12 lg:w-2/5 text-center text-white">

          {/* Header Text with Slide-in Animation */}
          <h1 className="text-7xl mb-4 animate-slidein-left animate-blink-text">Bathinda <span className='text-purple-600'>Haveli</span></h1>

          {/* Subtitle */}
          <div className="animate-slidein-left mb-8">
            <p className="text-2xl">Share your favorite travel destination and we will feature it in our next blog!</p>

            {/* Button with Blink Effect */}
            <div className='flex justify-center items-center'>
              <button className='rounded px-10 py-3 text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out animate-blink-button'><a href="/menu">Our Menu</a></button>
              <span className='text-white mx-4 animate-menu-transition'>Explore Us</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;
