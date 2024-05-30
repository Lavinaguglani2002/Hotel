import React from 'react';
import Navbar from '../Pages/Navbar';
import Header from './Header';
import Footer from '../Pages/Footer';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import Aboutus from './Aboutus';

const Home = () => {
  // const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('TOKEN');
  //   setIsLoggedIn(!!token); // Set isLoggedIn based on the presence of token
  // }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem('TOKEN');
  //   setIsLoggedIn(false);
  //   navigate('/login');
  // };

  return (
    <div>
      {/* <span>{localStorage.getItem('EMAIL')}</span>
      {isLoggedIn ? (
        <button onClick={handleLogout} className='text-white'>
          Logout
        </button>
      ) : (
        <div>
          <button onClick={() => navigate('/login')} className='text-white'>
            Login
          </button>
          <button onClick={() => navigate('/signup')} className='text-white'>
            Signup
          </button>
        </div>
      )} */}
      <Navbar />
      <Header />


<Aboutus/>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
