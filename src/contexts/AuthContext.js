import { createContext, useContext } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const signup = (email, password) => {
    // console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };
  return <AuthContext.Provider value={{ signup }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
