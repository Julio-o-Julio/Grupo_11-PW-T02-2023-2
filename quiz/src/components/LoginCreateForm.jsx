import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import useForm from '../hooks/useForm';
import Input from './Input';
import Error from './Error';
import styles from '../styles/LoginCreateForm.module.css';

const LoginCreateForm = () => {
  const name = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userCreate, loading, error } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.validate() && email.validate() && password.validate())
      userCreate(name.value, email.value, password.value);
  };

  return (
    <>
      <form
        className={`${styles.form} animationBottom`}
        onSubmit={handleSubmit}
      >
        <Input label="Nome" name="name" type="text" {...name} />
        <Input label="E-mail" name="email" type="email" {...email} />
        <Input label="Senha" name="password" type="password" {...password} />

        {loading ? (
          <button className={styles.btnCadastrar} disabled>
            Cadastrando...
          </button>
        ) : (
          <button className={styles.btnCadastrar}>Cadastrar</button>
        )}

        <Error error={error} />
      </form>

      <h4 className={`${styles.temConta} animationBottom`}>Já tem uma conta?</h4>
      <button
        className={`${styles.btnEntrar} animationBottom`}
        onClick={() => navigate('/login')}
      >
        Entrar
      </button>
    </>
  );
};

export default LoginCreateForm;
