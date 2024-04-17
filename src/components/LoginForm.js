import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';

const LoginForm = () => {
  const { userData, setUserData } = useContext(AppContext);
  const [createAccount, setCreateAccount] = useState(userData.createAccount);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      createAccount,
    });
    navigate('/photo-upload');
  };
  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:items-start h-screen">
      <div className="absolute top-4 right-4 flex items-center text-sm mt-24 md:mt-0">
        Already a member? 
        <button type='button' className='text-blue-500 ml-1'>Sign In</button>
      </div>
      
      <div className="h-1/3 md:h-full w-full md:w-1/3  flex justify-center">
        <img src="https://img.freepik.com/premium-photo/modern-laptop-white-headphones-gray-notebook-with-pen-cup-coffee-orange-surface_245974-1017.jpg?w=360"  className="max-w-full h-auto hidden md:block" alt=''/>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:top-16 md:left-auto md:transform-none md:mr-40 block">
          <img src="/images/logo2.png"  className="w-28 h-10" alt=''/>
        </div>
        <div className="absolute text-center mt-24 hidden md:block">
          <h2 className="text-2xl font-bold mt-4 text-red-800">Discover the world's top <br/><span className="mr-5">Designers & Creatives.</span></h2>
        </div>
      </div>
      
      <div className="w-full md:w-2/3 flex items-center justify-center mt-60 md:mt-16 ">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="">
            <h2 className="text-2xl font-bold mb-4 ml-28 md:ml-0 mt-3 md:mt-0">Sign up to Dribble</h2>
           {/*<p className=''>Username has already taken</p>*/} 
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 mt-8 ml-10 md:ml-0 mr-10 md:mr-0">
              <div className="w-full mr-0 md:mr-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  value={userData.name} 
                  onChange={handleNameChange} 
                  className="shadow appearance-none border bg-slate-100 rounded-lg w-full md:w2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  required 
                />
              </div> 
              <div className='mt-4 md:mt-0 w-full'>
                <label htmlFor="username" className="block text-gray-700 font-bold mb-1">
                  Username
                </label> 
                <input 
                  type="username" 
                  id="username" 
                  value={userData.username} 
                  onChange={(e) => setUserData({ ...userData, username: e.target.value })} 
                  className="shadow appearance-none border rounded-lg w-full md:2/3 py-2 px-3 bg-slate-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  required 
                /> 
              </div> 
            </div>
            <div className="mb-6 ml-10 md:ml-0 mr-10 md:mr-0">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              value={userData.email} 
              onChange={(e) => setUserData({ ...userData, email: e.target.value })} 
              className="shadow appearance-none border rounded-lg bg-slate-100 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              required 
            />
            </div>
            
            <div className="mb-6 ml-10 md:ml-0 mr-10 md:mr-0">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-1">
                Password
              </label>
              <input 
                type="password" 
                id="password" 
                placeholder="6+ characters" 
                className="shadow appearance-none border rounded-lg bg-slate-100 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                required 
              />
            </div>
            
            <div className="flex justify-between items-center ml-10 md:ml-0 mr-10 md:mr-0">
              <div className="mb-4">
                <input 
                  type="checkbox" 
                  id="create-account" 
                  checked={createAccount} 
                  onChange={(e) => setCreateAccount(e.target.checked)} 
                  className="mr-2 size-5 mb-8" 
                />
              </div>
              <div>
                <label htmlFor="create-account" className="text-gray-500">
                  <span>
                    Creating account means you're okay with our <button a href="" className="text-blue-700">Terms of Service, Privacy Policy</button> and our default <button className="text-blue-700">Notifications Settings.</button>
                  </span>
                </label>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline mt-6 ml-10 md:ml-0 mr-10 md:mr-0"
            >
              Create Account
            </button>
            
            <div className="text-sm font-extralight text-gray-500 mt-5 mb-20 ml-10 md:ml-0 mr-10 md:mr-0">
              <span>
                This site is protected by reCAPTCHA and the Google <button className="text-purple-500 font-semibold">Privacy Policy</button> and <button className="text-purple-500 font-semibold">Terms of Service</button> apply.
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
