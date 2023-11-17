import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/Header.module.css';

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/" aria-label="Quiz - Home">
          Quiz?
        </Link>
        <Link className={styles.username} to="/profile">
          {data.displayName}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
