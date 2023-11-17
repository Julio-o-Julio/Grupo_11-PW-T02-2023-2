import ButtonReturn from '../components/ButtonReturn';
import Podium from './svgs/Podium';
import styles from '../styles/GlobalRankingList.module.css';

const GlobalRankingList = () => {
  return (
    <>
      <ButtonReturn />
      <section
        className={`${styles.container} container articleBox animationBottom`}
      >
        <h1>Ranking</h1>
        <article className={styles.item}>
          <Podium type={'litle'} place={1} />
          <b>1°</b>
          <p>User name</p>
        </article>
      </section>
    </>
  );
};

export default GlobalRankingList;
