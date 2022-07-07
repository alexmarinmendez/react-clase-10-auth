import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { user } = useAuth();
  return <div>Welcome {user && user.email}</div>;
};

export default Home;
