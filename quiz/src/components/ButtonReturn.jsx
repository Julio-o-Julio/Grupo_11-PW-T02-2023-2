import { useNavigate } from 'react-router-dom';

const ButtonReturn = () => {
  const navigate = useNavigate();

  return <span className="buttonReturn" onClick={() => navigate(-1)}></span>;
};

export default ButtonReturn;
