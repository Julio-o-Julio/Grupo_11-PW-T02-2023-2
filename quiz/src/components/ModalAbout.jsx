import styles from '../styles/ModalAbout.module.css';

const ModalAbout = ({ setModalAbout }) => {
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalAbout(null);
  };

  return (
    <section className={styles.modalAbout} onClick={handleOutsideClick}>
      <article className={`${styles.contentModal} sectionDarkTheme`}>
        <h1 className={styles.title}>Sobre</h1>

        <p className={styles.text}>
          Este site se trata de um projeto acadêmico feito por Anália Beatriz e
          Julio Souza para a matéria de Programação para Web.
        </p>
        <p className={styles.text}>
          Esta aplicação web consiste em um jogo de quizes sobre programação,
          hardwares e história da computação. Neste site você vai poder
          aprender, se divertir e competir com outros usuários.
        </p>
        <p className={styles.text}>
          Temos ranking de melhores jogadores, conquistas para você analizar seu
          progresso e uma forma intuitiva de jogar.
        </p>
      </article>
    </section>
  );
};

export default ModalAbout;
