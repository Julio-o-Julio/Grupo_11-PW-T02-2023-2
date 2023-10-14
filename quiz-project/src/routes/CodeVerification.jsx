import { Link, useNavigate } from 'react-router-dom';
import { Button, ButtonDarkTheme, ContainerForm } from '../styles/index';
import Header from '../components/Header';

const CodeVerification = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    console.log('codigo enviado!');
    return navigate('/verification');
  };

  return (
    <>
      <Header>Verificaçao de identidade</Header>
      <ContainerForm>
        <Button onClick={handleVerify}>Entrar</Button>
      </ContainerForm>
      <Link to={'..'}>
        <ButtonDarkTheme>Voltar</ButtonDarkTheme>
      </Link>
    </>
  );
};

export default CodeVerification;
