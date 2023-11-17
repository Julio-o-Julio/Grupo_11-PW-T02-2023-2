import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import useForm from '../hooks/useForm';
import Input from './Input';
import styles from '../styles/ForgotPasswordForm.module.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';

const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState(false);
  const email = useForm('email');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.validate()) {
      setLoading(true);
      auth.useDeviceLanguage();
      await sendPasswordResetEmail(auth, email.value);
      navigate('/login');
    }
  };

  return (
    <section className="animationBottom">
      <p className={styles.title}>
        Digite seu e-mail para que possamos lhe enviar um e-mail de recuperação
        de senha.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="E-mail" name="email" type="email" {...email} />

        {loading ? (
          <button className={styles.btnEnviar} disabled>
            Enviando...
          </button>
        ) : (
          <button className={styles.btnEnviar}>Enviar</button>
        )}
      </form>

      <button
        className={`${styles.btnVoltar} buttonDarkTheme`}
        onClick={() => navigate('/login')}
      >
        Voltar
      </button>
    </section>
  );
};

export default ForgotPasswordForm;
