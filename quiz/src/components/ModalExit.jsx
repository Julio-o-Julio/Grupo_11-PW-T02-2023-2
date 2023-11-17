import styles from '../styles/ModalExit.module.css';

const ModalExit = ({ setModalExit, handleExit, endGame }) => {
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalExit(null);
  };

  return (
    <section className={styles.modalExit} onClick={handleOutsideClick}>
      <article className={`${styles.contentModal} sectionDarkTheme`}>
        <h4 className={styles.title}>Tem certeza que deseja sair?</h4>
        {!endGame && <p className={styles.title}>
          O seu progresso desta partida será perdido!
        </p>}

        <button className={styles.buttonExit} onClick={handleExit}>
          Sim
        </button>
      </article>
    </section>
  );
};

export default ModalExit;
