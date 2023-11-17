import Star from './svgs/Star';
import styles from '../styles/LoginHeader.module.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const LoginHeader = () => {
  let location;

  const [children, setChildren] = useState('');

  const { pathname } = useLocation();

  if (pathname[pathname.length - 1] === '/') location = pathname.slice(0, -1);
  else location = pathname;

  useEffect(() => {
    switch (location) {
      case '/login':
        setChildren('Entrar');
        break;
      case '/login/createuser':
        setChildren('Cadastre-se');
        break;
      case '/login/forgotpassword':
        setChildren('Recuperar senha');
        break;
      default:
        setChildren('Login');
        break;
    }
  }, [location]);

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Star type={'gradient'} />
        <h1>{children}</h1>
        <Star type={'gradient'} />
      </header>
    </section>
  );
};

export default LoginHeader;
