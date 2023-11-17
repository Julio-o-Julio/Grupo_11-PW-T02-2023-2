import Star from '../components/svgs/Star';
import ButtonReturn from '../components/ButtonReturn';
import styles from '../styles/AchievementsList.module.css';

const AchievementsList = () => {
  return (
    <>
      <ButtonReturn />
      <section
        className={`${styles.container} container articleBox animationBottom`}
      >
        <h1>Conquistas</h1>
        <article className={styles.item}>
          <p>Conseguir o máximo de pontos na modalidade Todos</p>
          <section className={styles.content}>
            <Star type={'golden'} />
            <p>1/1</p>
            <Star type={'golden'} />
          </section>
        </article>
        <article className={styles.item}>
          <p>Conseguir o máximo de pontos na modalidade Todos</p>
          <section className={styles.content}>
            <Star type={'normal'} />
            <p>0/1</p>
            <Star type={'normal'} />
          </section>
        </article>
      </section>
    </>
  );
};

export default AchievementsList;
