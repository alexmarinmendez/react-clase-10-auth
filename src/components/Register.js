import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { error, signup } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    // console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user.email, user.password);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="youremail@company.com" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="**************" onChange={handleChange} />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
