import { useNavigate } from "react-router-dom";
import { Button } from '../styles/index'

const Login = () => {
  const navigate = useNavigate()

  const handleDataLogin = () => {
    console.log('entrou!')
    return navigate('/Home');
  }

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={handleDataLogin}>Entrar</Button>
    </div>
  );
};

export default Login;
