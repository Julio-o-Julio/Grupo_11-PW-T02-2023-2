import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const ProtectedRouteAdmin = ({ children }) => {
  const { admin } = useContext(UserContext);

  const navigate = useNavigate();

  if (admin === true) {
    return children;
  } else if (admin === false) {
    return navigate('/');
  } else {
    return <></>;
  }
};

export default ProtectedRouteAdmin;
