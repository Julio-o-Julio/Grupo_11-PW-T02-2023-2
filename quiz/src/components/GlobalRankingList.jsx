import { useEffect, useState } from 'react';
import { getRanking } from '../services/api';
import ButtonReturn from '../components/ButtonReturn';
import Podium from './svgs/Podium';
import styles from '../styles/GlobalRankingList.module.css';

const GlobalRankingList = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const attRanking = async () => {
      const rankings = await getRanking();

      if (rankings) setRankings(rankings);
    };

    attRanking();
  }, []);

  return (
    <>
      <ButtonReturn />
      <section
        className={`${styles.container} container articleBox animationBottom`}
      >
        <h1>Ranking</h1>

        {rankings.map((ranking, index) => {
          return (
            <article key={index} className={styles.item}>
              <Podium type={'litle'} place={index + 1} />
              <b>{index + 1}°</b>
              <p>{ranking.name}</p>
              <p>
                Nota: <b>{ranking.score.toFixed(2)}</b>
              </p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default GlobalRankingList;
