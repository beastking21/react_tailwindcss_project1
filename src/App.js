import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PhotoUpload from './components/PhotoUpload';
import Purposes from './components/Purposes';
import ConfirmationPage from './components/ConfirmationPage';
import { AppProvider } from './components/AppContext';


const App = () => {
  // eslint-disable-next-line 
  const [selectedImage, setSelectedImage] = useState(null);
  // eslint-disable-next-line 
  const handleImageUpload = (image) => {
    setSelectedImage(image);
  };

  return (
    <AppProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/photo-upload" element={<PhotoUpload />} />
        <Route path="/purposes" element={<Purposes />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
    </AppProvider>
  );
};

export default App;