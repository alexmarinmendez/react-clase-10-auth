import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthContextProvider from './contexts/AuthContext';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="bg-slate-300 h-screen text-black flex">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
