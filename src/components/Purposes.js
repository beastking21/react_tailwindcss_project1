import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Purposes = () => {
  const { userData, setUserData } = useContext(AppContext);
  const [selectedPurposes, setSelectedPurposes] = useState([]);
  const navigate = useNavigate();
 

  const handlePurposeSelect = (purpose) => {
    if (selectedPurposes.includes(purpose)) {
      setSelectedPurposes(selectedPurposes.filter((p) => p !== purpose));
    } else {
      setSelectedPurposes([...selectedPurposes, purpose]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ ...userData, selectedPurposes });
    navigate('/confirmation');
  };

  const handleGoBack = () => {
    navigate('/photo-upload', { state: { prevPath: '/purposes' } });
  };

  const purposes = [
    {
      id: 'purpose1',
      title: "I'm a designer looking to share my work",
      image: 'https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-5175.jpg?t=st=1713206554~exp=1713210154~hmac=50160c066b8a5a146375e169b358892a83324b22cabeb2714700ba566ddceece&w=740',
      subPurpose: 'Find the clients from over 90 million users',
    },
    {
      id: 'purpose2',
      title: "I'm looking to hire a designer",
      image: 'https://img.freepik.com/free-vector/progress-concept-illustration_114360-1522.jpg?t=st=1713197358~exp=1713200958~hmac=f70eb08870f8b648e7f05ec3c5b4bcc0c4f274bfdf9c17026389b7cdebdacf93&w=740',
      subPurpose: 'Find the best designers from all over world and improve your designs',
    },
    {
      id: 'purpose3',
      title: "I'm looking for design inspiration",
      image: 'https://img.freepik.com/free-vector/business-mission-concept-illustration_114360-7295.jpg?t=st=1713197390~exp=1713200990~hmac=ec4da711e30e9be8f65d6fd95f2a38be3c62a25b18b2609891d0a166f9325e07&w=740',
      subPurpose: 'With over 7 million shots from vast community of designers, Dribble is leading source for design inspiration.',
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="relative flex items-center justify-center p-4 md:p-0">
        <div className="absolute top-4 left-4 flex items-center">
          <div className="text-gray-500 hover:text-gray-300 cursor-pointer ml-4 font-bold text-xl">
            <img src="/images/logo3.png" className="w-28" alt=''/>
          </div>
          <div
            className="text-gray-500 hover:text-gray-700 cursor-pointer md:block ml-2"
            onClick={handleGoBack}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-500 text-sm ml-10 bg-gray-100 py-3 px-3 rounded hidden md:sm:block" />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2 mt-16">What brings you to Dribble?</h1>
          <h2 className="text-gray-500 -mb-6 md:mb-16 font-semibold">
            Select the option that best describes you. Don't worry, you can explore other options later.
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow items-center justify-center">
        <div className="w-2/3 md:w-full max-w-4xl mt-10 mb-10 md:space-x-10 space-y-10 md:space-y-0 flex flex-col md:flex-row justify-center">
          {purposes.map((purpose) => (
            <div
              key={purpose.id}
              className={`bg-white shadow-md rounded-md p-8 w-auto md:w-1/3 flex flex-col items-center transition-all duration-1000${
                selectedPurposes.includes(purpose.id)
                  ? 'transform scale-100 outline outline-2 outline-gray-400'
                  : ''
              }`}
              onClick={() => handlePurposeSelect(purpose.id)}
            >
              <div className="relative w-full flex justify-center">
                <img
                  src={purpose.image}
                  alt={purpose.title}
                  className={`mb-2 transition-all w-full h-24 max-w-[150px] ${
                    selectedPurposes.includes(purpose.id)
                      ? 'transform -translate-y-16'
                      : ''
                  }`}
                />
                {selectedPurposes.includes(purpose.id) && (
                  <div className="absolute left-0 right-0 bottom-0 bg-white">
                    <p className="mb-1 text-sm text-gray-500 text-center">{purpose.subPurpose}</p>
                  </div>
                )}
              </div>
              <p className={`flex justify-center text-center font-bold transition-all duration-1000 `}>
                {purpose.title}
              </p>
              <div className="mt-2 border border-gray-400 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300">
                {selectedPurposes.includes(purpose.id) && (
                  <svg
                    className="w-4 h-4 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.0563 16.2344L5.83751 12.0156L7.18126 10.6719L10.0563 13.5469L16.8188 6.79687L18.1625 8.14062L10.0563 16.2344Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="font-bold w-full flex items-center justify-center text-center md:text-left">
          Anything else? You can select multiple
        </p>
        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            disabled={selectedPurposes.length === 0}
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-16 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            Finish
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          {selectedPurposes && (
            <button
              type="button"
              onClick={handleGoBack}
              className=" text-gray-400 font-semibold hover:text-gray-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              or Press <span className="text-gray-400 hover:text-gray-600 font-bold">Return</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Purposes;
