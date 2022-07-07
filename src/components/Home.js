import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div>Welcome {user ? user.email : 'anonymous'}</div>
      {/* {user && <button onClick={logout}>Logout</button>} */}
      {user ? <button onClick={logout}>Logout</button> : <button onClick={() => navigate('/login')}>Login</button>}
    </>
  );
};

export default Home;
