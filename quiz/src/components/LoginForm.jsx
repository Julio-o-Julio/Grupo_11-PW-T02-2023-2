import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/LoginForm.module.css';
import useForm from '../hooks/useForm';
import Input from './Input';
import Error from './Error';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin, error, loading } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.validate() && password.validate())
      userLogin(email.value, password.value);
  };

  return (
    <>
      <form
        className={`${styles.form} animationBottom`}
        onSubmit={handleSubmit}
      >
        <Input label="E-mail" name="email" type="email" {...email} />
        <Input label="Senha" name="password" type="password" {...password} />

        <Link className={styles.esqueciSenha} to="/login/forgotpassword">
          Esqueci a senha
        </Link>

        {loading ? (
          <button className={styles.btnEntrar} disabled>
            Entrando...
          </button>
        ) : (
          <button className={styles.btnEntrar}>Entrar</button>
        )}

        <Error error={error} />
      </form>

      <h4 className={`${styles.cadastrese} animationBottom`}>Não tem uma conta?</h4>
      <button
        className={`${styles.btnCadastrese} animationBottom`}
        onClick={() => navigate('/login/createuser')}
      >
        Cadastre-se
      </button>
    </>
  );
};

export default LoginForm;
