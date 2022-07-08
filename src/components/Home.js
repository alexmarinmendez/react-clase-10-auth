import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-xl mb-4">welcome {user.displayName || user.email}</p>
        <button className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black" onClick={logout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Home;
