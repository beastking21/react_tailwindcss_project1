import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCamera, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';

const PhotoUpload = () => {
  const { userData, setUserData } = useContext(AppContext);
  const [location, setLocation] = useState(userData.location);
  const navigate = useNavigate();

  
  const handleImageUpload = (e) => {
    setUserData({ ...userData, selectedImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ ...userData, location });
    navigate('/purposes');
  };
  const handleGoBack = () => {
    navigate(location.state?.prevPath || '/');
  };
  return (
    <div>
      <div className="absolute top-4 left-4 text-gray-500 hover:text-gray-300 cursor-pointer ml-4 font-bold text-xl">
      <img src="/images/logo3.png"  className="w-28" alt=''/>
      </div>
    
    <div className="flex h-screen items-center justify-center">
      
    <div className="absolute mt-6 md:mt-0 mb-96 ml-9 md:ml-20 ">
    <h1 className="text-3xl font-bold mb-2 mt-10 md:mt-2 text-center md:text-start">Welcome! Let's create your profile</h1>
    <p className="text-gray-500 mb-10 md:mb-4 font-semibold text-center md:text-start">Let others get to know you better! You can do these later.</p>
    </div>
      <div className="flex items-start mt-16 md:mt-0 ml-14 md:ml-0">
      
        <div className="mr-8 py-24 mt-12 ">
          <p className="text-lg font-bold mt-10 md:mt-0 mb-2">Add an avatar</p>
          {userData.selectedImage ? (
            <div className="w-32 h-32 rounded-full border-2 border-gray-500 bg-white flex items-center justify-center overflow-hidden">
              <img
                src={URL.createObjectURL(userData.selectedImage)}
                alt="Selected"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-500 bg-white flex items-center justify-center">
             <FontAwesomeIcon icon={faCamera} className="text-gray-400 text-2xl" />
             <FontAwesomeIcon icon={faPlus} className="absolute text-gray-500 size-2" />
            </div>
          )}
        </div>
        <div >
         
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mt-60 md:mt-48">
              <label
                htmlFor="image"
                className="w-full rounded-md py-2 px-3 outline outline-1 outline-gray-300 cursor-pointer font-semibold"
                
              >
                Choose Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleImageUpload}
                className="hidden"
                
              />
              <p className="text-gray-400 font-semibold mt-3">
              <button><FontAwesomeIcon icon={faChevronRight} className="text-gray-400 mr-1" /></button> Or choose one of our default{' '}
              </p>
            </div>
            <div className="mr-8 py-24 -ml-40 mt-4">
              <label htmlFor="location" className="block font-bold text-lg">
                Add your location
              </label>
              <div className="flex items-center border-b border-gray-400 py-2">
              <input
                type="text"
                id="location"
                placeholder="Enter a location"                
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className=" bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                required
              />
              </div>
            </div>
            <div className="-ml-40 -mt-8">
              <button
                type="submit"
                disabled={!userData.selectedImage || !location}
                className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-16 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
              </div>
              <div className="-ml-36">
              {userData.selectedImage && location && (
                <button
                  type="button"
                  onClick={handleGoBack}
                  className=" text-gray-400 hover:text-gray-600 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  or Press <span className="text-gray-400 hover:text-gray-600 font-bold">Return</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PhotoUpload;
