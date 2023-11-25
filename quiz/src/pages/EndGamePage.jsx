import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FinalFace from '../components/svgs/FinalFace';
import {
  getCategoryAtuall,
  postPlaying,
  deleteCurrentGameData,
  getCurrentGameData,
  getResponseCorrectDatas,
  postUserScore,
  postRanking
} from '../services/api';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/EndGamePage.module.css';
import checkAchievements from '../helpers/checkAchievements';

const EndGamePage = () => {
  const [score, setScore] = useState('');
  const [title, setTitle] = useState('');
  const [motivationalPharse, setMotivationalPharse] = useState('');
  const [categoryAtuall, setCategoryAtuall] = useState(null);

  const { setCategory, data } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getDatas = async () => {
      const currentGameData = await getCurrentGameData(data.uid);

      if (currentGameData.length === 5) {
        const responseCorrectDatas = await getResponseCorrectDatas(
          currentGameData
        );

        if (responseCorrectDatas) {
          await postUserScore(responseCorrectDatas.length, data.uid);
          await postRanking(data.uid);
          await checkAchievements(
            categoryAtuall,
            responseCorrectDatas.length,
            data.uid
          );
          setScore(responseCorrectDatas.length);
        }
      }
    };

    getDatas();
  }, [data, setCategory, categoryAtuall]);

  useEffect(() => {
    setTitle(score >= 3 ? 'Parabéns!!' : 'Você não foi muito bem desta vez!');

    setMotivationalPharse(
      score >= 3
        ? 'O seu ranking está subindo não é mesmo?'
        : 'O que está acontecendo meu jovem? Jesus Christ!!'
    );
  }, [score]);

  useEffect(() => {
    const attCategoryAtuall = async () => {
      const categoryAtuall = await getCategoryAtuall(data.uid);

      if (categoryAtuall) setCategoryAtuall(categoryAtuall);
    };

    attCategoryAtuall();
  }, [data]);

  const handlePlayAgain = async () => {
    if (categoryAtuall) {
      setCategory(categoryAtuall);
      postPlaying(true, data.uid);
      deleteCurrentGameData(data.uid);
      navigate(`/game/category/${categoryAtuall}`);
    }
  };

  return (
    <>
      <main className={`${styles.main} container`}>
        <section className={`${styles.endMessage} sectionDarkTheme`}>
          <h4 className={styles.text}>{title}</h4>
          <p className={styles.text}>
            Você acertou {score} respostas de 5 perguntas
          </p>
        </section>

        <p className={styles.motivationalPharse}>{motivationalPharse}</p>

        <section className={styles.svgFinal}>
          <FinalFace score={score} />
        </section>

        <button onClick={handlePlayAgain}>Jogar novamente</button>
      </main>
    </>
  );
};

export default EndGamePage;
