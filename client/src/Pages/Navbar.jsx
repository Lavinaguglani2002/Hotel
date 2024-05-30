// import React, { useEffect, useState } from 'react';
// import LOGO from './LOGO.jpg';
// import { useDispatch } from 'react-redux';
// import { setSearch } from '../redux/slices/SearchSlice';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isSearchFocused, setIsSearchFocused] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();


//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('TOKEN');
//     setIsLoggedIn(!!token); // Set isLoggedIn based on the presence of token
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('TOKEN');
//     setIsLoggedIn(false);
//     navigate('/login');
//   };







//    const toggleMenu = () => {
//      setIsMenuOpen(!isMenuOpen);
//    };

//    const handleSearchSubmit = (e) => {
//      e.preventDefault();
//      alert(`Searching for: ${searchTerm}`);
//    };

//    const handleSearchChange = (e) => {
//      setSearchTerm(e.target.value);
//      dispatch(setSearch(e.target.value));
//    };

//    const handleSearchFocus = () => {
//      setIsSearchFocused(true);
//    };

//    const handleSearchBlur = () => {
//      setIsSearchFocused(false);
//    };

//    const currentDate = new Date().toUTCString().slice(0, 16);

//    return (
//      <div>
//        {/* Logo and Text */}
//        <div className="bg-black py-4 text-white text-center">
//          <img src={LOGO} alt="Logo" className="w-16 h-16 mx-auto mb-2" />
//          <div className="text-4xl font-bold text-yellow-600">Khatu Ji Vaishnu Dhaba</div>
//        </div>

//        {/* Mobile Navbar */}
//        <nav className="md:hidden">
//          <h2 className='text-xl font-bold text-red-600'>{currentDate}</h2>
//          <div className="bg-black flex items-center justify-between h-16 px-4 text-white">
//            <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
//              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//              </svg>
//            </button>
//            <div className="flex items-center">
//              <input
//                type="search"
//                name='search'
//                placeholder='Search Here'
//                autoComplete='off'
//                value={searchTerm}
//                onChange={handleSearchChange}
//                onFocus={handleSearchFocus}
//                onBlur={handleSearchBlur}
//                className={`p-3 border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25v] ${isSearchFocused ? 'text-black' : ''}`}
//              />
//            </div>
//          </div>
//        </nav>

//        {/* Mobile Menu */}
//        {isMenuOpen && (
//          <div className="py-2 px-6 bg-black text-white">
//            <a href="/home" className="block py-2">Home</a>
//            <a href="/about" className="block py-2">About</a>
//            <a href="/menu" className="block py-2">Menu</a>
//            <a href="/contact" className="block py-2">Contact</a>
//          </div>
//        )}

//        {/* Desktop Navbar */}
//        <nav className="bg-black hidden md:block">
//          <div className="max-w-7xl mx-auto px-4">
//            <div className="flex items-center justify-between h-16">
//              <ul className="flex justify-left space-x-10">
//                <li><a href="/home" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">Home</a></li>
//                <li><a href="/about" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">About</a></li>
//                <li><a href="/menu" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">Menu</a></li>
//                <li><a href="/gallery" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">Gallery</a></li>
//                <li><a href="/location" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">Location</a></li>
//                <li><a href="/contact" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">Contact</a></li>
//                <span>{localStorage.getItem('EMAIL')}</span>
//       {isLoggedIn ? (
//         <button onClick={handleLogout} className='text-white'>
//           Logout
//         </button>
//       ) : (
//         <div>
//           <button onClick={() => navigate('/login')} className='text-white'>
//             Login
//           </button>
//           <button onClick={() => navigate('/signup')} className='text-white'>
//             Signup
//           </button>
//         </div>
//       )}


//              </ul>
//              <div>
//                <form className="ml-4" onSubmit={handleSearchSubmit}>
//                  <input
//                    className="px-2 py-1 rounded-md border border-gray-700"
//                    type="search"
//                    placeholder="Search"
//                    value={searchTerm}
//                    onChange={handleSearchChange}
//                    onFocus={handleSearchFocus}
//                    onBlur={handleSearchBlur}
//                  />
//                  <button type="submit" className="ml-2 px-4 py-1 rounded-md bg-gray-700 text-white">
//                    Search
//                  </button>
//                </form>
//              </div>
//            </div>
//          </div>
//        </nav>
//      </div>
//    );
//  };

//  export default Navbar;
import React, { useEffect, useState } from 'react';
import LOGO from './LOGO.jpg';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    


  
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    setIsLoggedIn(!!token); // Set isLoggedIn based on the presence of token
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('TOKEN');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(setSearch(e.target.value));
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  const currentDate = new Date().toUTCString().slice(0, 16);

  return (
    <div>
      {/* Logo and Text */}
      <div className="bg-black py-4 text-white text-center">
        <img src={LOGO} alt="Logo" className="w-16 h-16 mx-auto mb-2" />
        <div className="text-4xl font-bold text-yellow-600">Bathinda Haveli</div>
      </div>

      {/* Mobile Navbar */}
      <nav className="md:hidden">
        <h2 className='text-xl font-bold text-red-600'>{currentDate}</h2>
        <div className="bg-black flex items-center justify-between h-16 px-4 text-white">
          <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="flex items-center">
            <input
              type="search"
              name='search'
              placeholder='Search Here'
              autoComplete='off'
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className={`p-3 border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25v] ${isSearchFocused ? 'text-black' : ''}`}
            />
          </div>
          <div className="flex items-center space-x-4">
            <span className='text-white'>{localStorage.getItem('EMAIL')}</span>
            {isLoggedIn ? (
              <button onClick={handleLogout} className='text-white text-lg font-bold border:2px hover:underline ml-2'>
                Logout
              </button>
            ) : (
              <div className="ml-2">
                <button onClick={() => navigate('/login')} className='text-white text-lg font-bold hover:underline'>
                  Login
                </button>
                <button onClick={() => navigate('/signup')} className='text-white text-lg font-bold hover:underline ml-2'>
                  Signup
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="py-2 px-6 bg-black text-white">
            <a href="/" className="block py-2">Home</a>
            <a href="/about" className="block py-2">About</a>
            <a href="/menu" className="block py-2">Menu</a>
            <a href="/contact" className="block py-2">Contact</a>
          </div>
        )}
      </nav>

      {/* Desktop Navbar */}
      <nav className="bg-black hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <ul className="flex justify-left space-x-10">
              <li><a href="/" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">Home</a></li>
              <li><a href="/about" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">About</a></li>
              <li><a href="/menu" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">Menu</a></li>
              <li><a href="/location" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">Location</a></li>
              <li><a href="/contact" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">Contact</a></li>
              <li><a href="/rooms" className="text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:underline text-2xl">Rooms</a></li>

            </ul>
            <div className="ml-4 flex items-center space-x-4">
              <form className="flex items-center" onSubmit={handleSearchSubmit}>
                <input
                  className="px-2 py-1 rounded-md border border-gray-700"
                  type="search"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                />
                <button type="submit" className="ml-2 px-4 py-1 rounded-md bg-gray-700 text-white">
                  Search
                </button>
              </form>
              <div className="flex items-center space-x-4 ml-4">
                <span className='text-white'>{localStorage.getItem('EMAIL')}</span>
                {isLoggedIn ? (
                  <button onClick={handleLogout} className='text-white text-lg font-bold hover:underline'>
                    Logout
                  </button>
                ) : (
                  <div className="ml-2">
                    <button onClick={() => navigate('/login')} className='text-white text-lg font-bold hover:underline'>
                      Login
                    </button>
                    <button onClick={() => navigate('/signup')} className='text-white text-lg font-bold hover:underline ml-2'>
                      Signup
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
