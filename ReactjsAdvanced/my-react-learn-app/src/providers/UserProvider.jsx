import React, { useState } from 'react';
import { UserContext } from '../context/UserContext';

// This provider will wrap components and provide user data to them
export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Vedat Cinbat',
    isLoggedIn: true,
  });

  // The value prop is where we provide the user data and any necessary functions
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
