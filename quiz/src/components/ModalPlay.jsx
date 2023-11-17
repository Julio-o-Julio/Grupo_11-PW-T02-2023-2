import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { postCategoryAtuall, deleteCurrentGameData, postPlaying } from '../services/api';
import styles from '../styles/ModalPlay.module.css';

const ModalPlay = ({ setModalPlay }) => {
  const navigate = useNavigate();

  const { setCategory, data } = useContext(UserContext);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalPlay(null);
  };

  const handleClick = (category) => {
    setCategory(category);
    postPlaying(true, data.uid);
    postCategoryAtuall(category, data.uid);
    deleteCurrentGameData(data.uid);
    navigate(`/game/category/${category}`);
  };

  return (
    <section className={styles.modalPlay} onClick={handleOutsideClick}>
      <article className={`${styles.contentModal} sectionDarkTheme`}>
        <h1 className={styles.title}>Modalidades</h1>

        <button onClick={() => handleClick('all')}>Todos</button>
        <button onClick={() => handleClick('programming')}>Programação</button>
        <button onClick={() => handleClick('hardware')}>Hardware</button>
        <button onClick={() => handleClick('historycomputing')}>
          História da computação
        </button>
      </article>
    </section>
  );
};

export default ModalPlay;
