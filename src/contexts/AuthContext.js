import { useState, createContext, useContext } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

const AuthContextProvider = ({ children }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signup = (email, password) => {
    // console.log(email, password);
    setError('');
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/'))
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          setError('Es muy corta');
        } else {
          setError(error.message);
        }
      });
  };
  return <AuthContext.Provider value={{ error, signup }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
