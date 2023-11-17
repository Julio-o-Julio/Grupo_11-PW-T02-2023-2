import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Star from './svgs/Star';
import styles from '../styles/UserProfile.module.css';

const UserProfile = () => {
  const { data, userLogout } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <main className="container wrapper animationBottom">
      <article className="articleBox">
        <h4 className={styles.title}>Minha média</h4>
        <section className={styles.flex}>
          <Star type={'gradient'} />
          <p>8/10</p>
          <Star type={'gradient'} />
        </section>
      </article>
      <article className="articleBox">
        <h4>Minha melhor modalidade</h4>
        <span>{'Todos'}</span>
      </article>
      <article className="articleBox">
        <h4>Meu nome</h4>
        <span>{data.displayName}</span>
      </article>
      <article className="articleBox">
        <h4>Meu e-mail</h4>
        <span>{data.email}</span>
      </article>
      {data && <button onClick={() => navigate('/changedata')}>Alterar dados</button>}
      {data && <button onClick={userLogout}>Sair</button>}
      <button className="buttonDarkTheme" onClick={() => navigate(-1)}>
        Voltar
      </button>
    </main>
  );
};

export default UserProfile;
