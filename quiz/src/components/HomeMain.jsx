import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConsoleControll from './svgs/ConsoleControll';
import Podium from './svgs/Podium';
import Star from './svgs/Star';
import ModalPlay from './ModalPlay';
import ModalAbout from './ModalAbout';
import styles from '../styles/HomeMain.module.css';

const HomeMain = () => {
  const [modalPlay, setModalPlay] = useState(null);
  const [modalAbout, setModalAbout] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      <main className="container wrapper animationBottom">
        <section className="sectionDarkTheme">
          <h3>Seu ranking global</h3>
          <span className={styles.ranking}>{2}°</span>
        </section>
        <article className={styles.phrase}>
          {'Está indo bem, mas tem gente melhor...'}
        </article>
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
