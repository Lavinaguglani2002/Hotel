// import React, { useState } from 'react';
// import axios from "axios"
// import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';
// const Signup = () => {
//   const navigate=useNavigate()
//   const [showPassword, setShowPassword] = useState(false);
// const[username,setUsername]=useState("")
// const[email,setEmail]=useState("")
// const[password,setPassword]=useState("")

  
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleSubmit=()=>{
//     console.log(username,email,password)
//     axios.post("http://localhost:3000/signup",{
//         username:username,
//         email:email,
//         password:password
//     })
//     .then(res=>{
//       navigate('/login');

//         console.log(res.data)
//     }).catch(err=>{
//         console.log(err)
//     })
//   }

//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
//       <h1 className="text-3xl font-bold mb-4">Signup</h1>
//       <div className="mb-4">
//         <label htmlFor="name" className="block mb-1">
//           Username
//         </label>
//         <input onChange={(e)=>{
//             setUsername(e.target.value)
//         }}
//           type="text"
//           id="name"
//           name="name"
//           value={username}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block mb-1">
//           Email
//         </label>
//         <input onChange={(e)=>{
//             setEmail(e.target.value)
//         }}
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="password" className="block mb-1">
//           Password
//         </label>
//         <div className="relative">
//           <input onChange={(e)=>{
//             setPassword(e.target.value)
//           }}
//             type={showPassword ? 'text' : 'password'}
//             id="password"
//             name="password"
//             value={password}
//             className="w-full px-3 py-2 border rounded-md pr-10"
//           />
//           <button
//             type="button"
//             onClick={togglePasswordVisibility}
//             className="absolute inset-y-0 right-0 px-3 py-2"
//           >
//             {showPassword ? 'Hide' : 'Show'}
//           </button>
//         </div>
//       </div>
//       <button onClick={handleSubmit} type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded-md">
//         Submit
//       </button>
//      <p>Already Have an Account </p> <Link to="/login">Login</Link>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './bh.jpg'; // Import your background image
import Loader from './Loader';
import Error from './Error';
import Success from './Success';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    setLoading(true);
    axios.post('http://localhost:3000/signup', {
      username: username,
      email: email,
      password: password,
    })
    .then(res => {
      setLoading(false);
      setSuccess(true);
      setUsername('');
        setEmail("");
        setPassword("");
      
      navigate('/login');
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
      setError(true);
    });
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {success && <Success message="Sign up success" />}
      <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-1">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="name"
              name="name"
              value={username}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              value={email}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1">Password</label>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                className="w-full px-3 py-2 border rounded-md pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 py-2"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button onClick={handleSubmit} type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded-md mb-4">Submit</button>
          <p className="text-center text-gray-700 mb-2">Already have an account?</p>
          <div className="flex justify-center">
            <Link to="/login" className="text-blue-500 underline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
