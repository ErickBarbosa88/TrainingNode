import React, { createContext, useContext, useState } from 'react';

export type UserContextType = {
  userName: string, 
  setUserName: (value:string) => void
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: any) => {
  const [userName, setUserName] = useState('');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
