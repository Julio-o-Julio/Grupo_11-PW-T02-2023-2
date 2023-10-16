import { useNavigate } from 'react-router-dom';
import { ButtonDarkTheme } from '../styles';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Error 404!</h1>

      <ButtonDarkTheme style={{marginTop: 32}} onClick={() => navigate('/')}>
        Ir para a página inicial
      </ButtonDarkTheme>
    </>
  );
};

export default ErrorPage;
