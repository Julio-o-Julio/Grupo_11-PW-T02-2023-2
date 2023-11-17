import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const { login, userLogout } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (login) {
      userLogout();
    }
    navigate('/');
  }, [login, userLogout, navigate]);

  return null;
};

export default UserLogout;
