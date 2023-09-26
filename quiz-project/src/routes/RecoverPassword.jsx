import { Link, useNavigate } from "react-router-dom";
import { Button, ButtonDarkTheme, Form } from "../styles/index";
import Header from '../components/Header'

const RecoverPassword = () => {
  const navigate = useNavigate();

  const handleSendCode = () => {
    console.log("codigo enviado!");
    return navigate("/verification");
  };

  return (
    <>
    <Header>Recuperação de senha</Header>
    <Form>
      <Button onClick={handleSendCode}>Entrar</Button>
    </Form>
    <Link to={'..'}> <ButtonDarkTheme>Voltar</ButtonDarkTheme> </Link>
    </>
  );
};

export default RecoverPassword;
