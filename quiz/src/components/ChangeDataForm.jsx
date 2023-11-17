import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import Input from './Input';
import Error from './Error';
import styles from '../styles/ChangeDataForm.module.css';
import { UserContext } from '../contexts/UserContext';

const ChangeDataForm = () => {
  const name = useForm(false);
  const email = useForm('email');
  const password = useForm('password');

  const { setName, setEmail, setPassword, error, loading } =
    useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.validate()) setName(name.value);
    if (email.validate()) setEmail(email.value);
    if (password.validate()) setPassword(password.value);
  };

  return (
    <section className="container animationBottom">
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Novo nome" name="name" type="name" {...name} />
        <Input label="Novo e-mail" name="email" type="email" {...email} />
        <Input
          label="Nova senha"
          name="password"
          type="password"
          {...password}
        />

        {loading ? (
          <button className={styles.btnAlterar} disabled>
            Alterando...
          </button>
        ) : (
          <button className={styles.btnAlterar}>Alterar</button>
        )}

        <Error error={error} />
      </form>
      <button
        className={`${styles.btnVoltar} buttonDarkTheme`}
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
    </section>
  );
};

export default ChangeDataForm;
