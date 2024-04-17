import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    selectedImage: null,
    location: '',
    name: '',
    username: '',
    email: '',
    password: '',
    createAccount: false,
    selectedPurposes: [],
  });

  return (
    <AppContext.Provider value={{ userData, setUserData }}>
      {children}
    </AppContext.Provider>
  );
};