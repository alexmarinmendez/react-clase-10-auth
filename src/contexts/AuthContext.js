import { createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const user = {
    login: true,
  };
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
