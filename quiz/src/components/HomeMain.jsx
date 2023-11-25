import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { getRanking } from '../services/api';
import ConsoleControll from './svgs/ConsoleControll';
import Podium from './svgs/Podium';
import Star from './svgs/Star';
import ModalPlay from './ModalPlay';
import ModalAbout from './ModalAbout';
import styles from '../styles/HomeMain.module.css';

const HomeMain = () => {
  const [ranking, setRanking] = useState(0);
  const [pharse, setPharse] = useState('');
  const [modalPlay, setModalPlay] = useState(null);
  const [modalAbout, setModalAbout] = useState(null);

  const { data } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const attRankingUser = async () => {
      const { userRanking } = await getRanking(data.uid);

      if (userRanking) setRanking(userRanking);
    };

    attRankingUser();
  }, [data]);

  useEffect(() => {
    if (ranking > 0) {
      if (ranking === 1) setPharse('QUE RANKING AESTHETIC!!!');
      else if (ranking <= 3)
        setPharse('Está indo bem, mas tem gente melhor...');
      else setPharse('Precisa melhorar em garoto');
    } else setPharse('Começe a jogar e subir o seu ranking!');
  }, [ranking]);

  return (
    <>
      <main className={`${styles.main} container wrapper animationBottom`}>
        <section className="sectionDarkTheme">
          <h3>Seu ranking global</h3>
          <span className={styles.ranking}>{ranking}°</span>
        </section>
        <article className={styles.phrase}>{pharse}</article>
        <button onClick={() => setModalPlay(true)}>
          <ConsoleControll />
          Jogar
        </button>
        <button onClick={() => navigate('/globalranking')}>
          <Podium />
          Ranking global
        </button>
        <button onClick={() => navigate('/achievements')}>
          <Star />
          Minhas conquistas
        </button>
        <button className="buttonDarkTheme" onClick={() => setModalAbout(true)}>
          Sobre
        </button>
      </main>

      {modalPlay && <ModalPlay setModalPlay={setModalPlay} />}
      {modalAbout && <ModalAbout setModalAbout={setModalAbout} />}
    </>
  );
};

export default HomeMain;
