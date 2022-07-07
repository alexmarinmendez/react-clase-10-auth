import { useState, createContext, useContext, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState({
    signupError: '',
    loginError: '',
  });
  const navigate = useNavigate();

  const signup = (email, password) => {
    // console.log(email, password);
    setError({ ...error, signupError: '' });
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/'))
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          setError({ ...error, signupError: 'Es muy corta' });
        } else {
          setError({ ...error, signupError: error.message });
        }
      });
  };

  const login = (email, password) => {
    setError({ ...error, loginError: '' });
    signInWithEmailAndPassword(auth, email, password)
      // .then((userCredential) => {
      //   const user = userCredential.user;
      //   console.log(user);
      //   navigate('/');
      // })
      .then(() => navigate('/'))
      .catch((error) => setError({ ...error, loginError: error.message }));
  };

  const logout = () => {
    signOut(auth);
    navigate('/login');
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
    });
  }, []);

  return <AuthContext.Provider value={{ user, error, signup, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
