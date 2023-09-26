import { Link, useNavigate } from "react-router-dom";
import { Button, ButtonDarkTheme, Form } from "../styles/index";
import Header from '../components/Header'

const CodeVerification = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    console.log("codigo enviado!");
    return navigate("/verification");
  };

  return (
    <>
    <Header>Verificaçao de identidade</Header>
    <Form>
      <Button onClick={handleVerify}>Entrar</Button>
    </Form>
    <Link to={'..'}> <ButtonDarkTheme>Voltar</ButtonDarkTheme> </Link>
    </>
  );
};

export default CodeVerification;
