import { useContext } from 'react';
import { AuthContext } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const handleClick = () => {
    logout();
    navigate('/');
  };
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleClick}>logout</button>
    </div>
  );
};

export default Profile;
