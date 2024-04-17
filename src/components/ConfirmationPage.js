import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import React, { useState, useContext, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLongArrowLeft, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons/faBasketball';

const ConfirmationPage = () => {
  const { userData } = useContext(AppContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const searchInputRef = useRef(null);

  const clicked = () => {
    setIsClicked(!isClicked);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    if (isClicked) {
      searchInputRef.current.focus();
    }
  }, [isClicked]);
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className=" py-4 px-6 shadow-sm flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="">
            <img src="/images/logo4.png" className="w-20" alt="" />
          </div>
          <div className="hidden md:sm:block cursor-pointer text-sm font-semibold text-gray-500">
            <button>Inspiration</button>
          </div>
          <div className="hidden md:sm:block cursor-pointer text-sm font-semibold text-gray-500 ">
            <button>Find Work</button>
          </div>
          <div className="hidden md:sm:block cursor-pointer text-sm font-semibold text-gray-500 ">
            <button>Learn Design</button>
          </div>
          <div className="hidden md:sm:block cursor-pointer text-sm font-semibold text-gray-500 ">
            <button>Go Pro</button>
          </div>
          <div className="hidden md:sm:block cursor-pointer text-sm font-semibold text-gray-500 ">
            <button>Hire Designers</button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="cursor-pointer md:pointer-events-none" onClick={clicked}>
              
              <FontAwesomeIcon icon={faSearch} className={`text-gray-500 absolute flex items-center size-5 md:size-4 -mt-2 md:mt-2 -ml-6 md:ml-2 ${isClicked ? 'hidden md:block' : 'block'}`} />
              
            </div>
            <input
            ref={searchInputRef}
              type="text"
              placeholder="Search"
              className={`bg-gray-100  ${isClicked ? 'block' : 'hidden'} md:flex rounded py-1 px-2 pr-3 pl-8 `} onClick={clicked}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  console.log('Search action triggered');
                }
              }}
              style={{ width: '100px' }}
            />
          </div>
          <div>
            <FontAwesomeIcon icon={faShoppingBag} className="text-gray-500  md:flex text-xl mr-2" />
          </div>
          <div className="size-8 bg-slate-400 rounded-full flex items-center justify-center">
            {userData.selectedImage && (
              <img
                src={URL.createObjectURL(userData.selectedImage)}
                alt="Selected"
                className="w-full h-full object-cover rounded-full"
              />
            )}
          </div>

          <div className="hidden md:flex items-center">
            <button className="bg-gray-500 text-white text-sm hover:bg-gray-600 rounded-lg py-2 px-3">
              Upload
            </button>
          </div>
        </div>
      </div>
      <div className="relative left-7 -mt-2" >
          <button className=" md:hidden" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faBars} className="text-gray-500 text-xl mr-2" />
          </button>
          {isDropdownOpen && (
            <div className={`off-canvas-sidebar fixed top-0 left-0 h-screen w-1/3 bg-slate-50 shadow-lg transition-transform duration-300 ease-in-out${
              isDropdownOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
              <ul className="flex flex-col items-center gap-6 mt-4" >
                <li className="cursor-pointer text-sm font-semibold text-gray-600" onClick={toggleDropdown}>
                  <button><FontAwesomeIcon icon={faLongArrowLeft} className="text-gray-800 text-xl mr-2" /></button>
                </li>
                <li className="cursor-pointer text-sm font-semibold text-gray-600">
                  <button>Inspiration</button>
                </li>
                <li className="cursor-pointer text-sm font-semibold text-gray-600 ">
                  <button>Find Work</button>
                </li>
                <li className="cursor-pointer text-sm font-semibold text-gray-600 ">
                  <button>Learn Design</button>
                </li>
                <li className="cursor-pointer text-sm font-semibold text-gray-600 ">
                  <button>Go Pro</button>
                </li>
                <li className="cursor-pointer text-sm font-semibold text-gray-600 ">
                  <button>Hire Designers</button>
                </li>
                <li className="cursor-pointer text-sm font-semibold text-gray-600 mt-48">
                  <button className="bg-gray-500 text-white text-sm hover:bg-gray-600 rounded-lg py-2 px-3">
                    Upload
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

      <div className="flex justify-center" >
        <div className="bg-white w-full max-w items-center">
          <h1 className="font-bold mb-4 text-2xl flex justify-center">Please verify your email...</h1>

          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-500 flex justify-center h-24 w-24">
              <img
                src="https://img.freepik.com/free-vector/open-email-envelope_1020-530.jpg?t=st=1713197121~exp=1713200721~hmac=10d2e0dcd5c53e390f3fc819aa737b33f2ff7431adaba5b90dde4a7005186064&w=740"
                alt="login"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <p className="text-gray-700 flex justify-center text-center">
            Please verify your email address. We've sent a confirmation email to:
          </p>
          <p className="text-gray-700 mb-4 font-bold flex justify-center">{userData.email}</p>
          <p className="text-gray-700 mb-4 flex justify-center text-center">
            Click the confirmation link in that email to begin using Dribble.
          </p>
          <div className="flex justify-center ">
            <p className="text-gray-700 text-center">
              Didn't receive the email? Check your Spam folder, it may have been caught by the filter. If<br/> you still don't see it, you can
              <span className=" ml-1 text-gray-500 font-semibold">
                <button type="button"> resend the confirmation email.</button>
              </span>
            </p>
          </div>
          <p className="text-gray-700 mb-4 mt-4 flex justify-center">
            Wrong email address?{' '}
            <span className=" ml-1 text-gray-500 font-semibold">
              <button type="button" onClick={handleGoBack}>
                Change it.
              </button>
            </span>
          </p>
        </div>
      </div>


      <div className="bg-gray-50 ">
        <div className="flex justify-between px-4 ">
      
          <div className="w-2/6 ml-10 hidden md:sm:block">
            <div
              className="mb-4 mt-10 cursor-pointer font-serif text-2xl text-gray-500"
              onClick={() => ''}
            >
              dribble
            </div>
            <div className="mb-4 cursor-pointer text-sm">
              <p>Dribble is the world's leading</p>
              <p>community for creatives to share, grow,</p>
              <p>and get hired.</p>
            </div>
            <div className="mb-4 cursor-pointer" onClick={() => ''}>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faDribbble} className="text-gray-500 text-xl mr-2" />
                <FontAwesomeIcon icon={faTwitter} className="text-gray-500 text-xl mr-2" />
                <FontAwesomeIcon icon={faFacebook} className="text-gray-500 text-xl mr-2" />
                <FontAwesomeIcon icon={faInstagram} className="text-gray-500 text-xl mr-2" />
                <FontAwesomeIcon icon={faPinterest} className="text-gray-500 text-xl mr-2" />
              </div>
            </div>
          </div>
        
          <div className="w-1/6 mt-10 hidden md:sm:block">
            <div className="mb-4 cursor-pointer font-bold text-sm">For Designers</div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Go Pro!
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Explore design work
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Design blog
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Overtime podcast
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Playoffs
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Weekly Warm-up
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Refer a Friend
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Code of conduct
            </div>
          </div>
          <div className="w-1/6 mt-10 hidden md:sm:block">
            <div className="mb-4 cursor-pointer font-bold text-sm">Hire designers</div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Post a job opening
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              <p>Post a freelance</p>
              <p>project</p>
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Serach for designers
            </div>
            <div className="mb-4 cursor-pointer font-bold text-sm">Brands</div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Advertise with us
            </div>
          </div>
          <div className="w-1/6 mt-10 hidden md:sm:block">
            <div className="mb-4 cursor-pointer font-bold text-sm">Company</div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              About
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Careers
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Support
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Media kit
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Testimonials
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              API
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Terms of service
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Privacy policy
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Cookie policy
            </div>
          </div>
          <div className="w-1/6 mt-10 hidden md:sm:block">
            <div className="mb-4 cursor-pointer font-bold text-sm">Directories</div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Design jobs
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Designers for hire
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              <p>Freelancer designers</p>
              <p>for hire</p>
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Tags
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Places
            </div>
            <div className="mb-4 cursor-pointer font-bold text-sm">Design assests</div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Dribble Marketplace
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Creative Market
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Footspring
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Foot Squirrel
            </div>
          </div>
          <div className="w-1/6 mt-10 hidden md:sm:block">
            <div className="mb-4 cursor-pointer font-bold text-sm">Design Resources</div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Freelancing
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Design Hiring
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Design Portfolio
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Design Education
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              Creative Process
            </div>
            <div className="mb-4 cursor-pointer text-sm" onClick={() => ''}>
              <p>Design Industry</p>
              <p>Trends</p>
            </div>
          </div>
        </div>
      </div>

      
      <hr
        className="my-0"
        style={{ border: '1px solid #E2E8F0', marginLeft: '50px', marginRight: '50px' }}
      />
      <div className="mt-auto py-4 px-6 flex justify-between">
      <div className="flex ml-10"><FontAwesomeIcon icon={faCopyright} className="text-gray-500 text-xl mr-2" />
        <p className="text-sm text-gray-400">2024 Dribble. All rights reseved.</p>
        </div>
        <div className="flex">
        <p className="text-sm mr-2"><span className="font-bold">77,77,777</span> <span className="text-gray-400">shots dribbled</span></p>
        <FontAwesomeIcon icon={faBasketball} className="text-gray-500 text-xl mr-2" />
        </div>
      </div>
      </div>
    
  );
};

export default ConfirmationPage;