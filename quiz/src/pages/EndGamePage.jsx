import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FinalFace from '../components/svgs/FinalFace';
import {
  getCategoryAtuall,
  postPlaying,
  postCategoryAtuall,
  deleteCurrentGameData,
  getCurrentGameData,
  getResponseCorrectDatas
} from '../services/api';
import { UserContext } from '../contexts/UserContext';
import ModalQuestions from '../components/ModalQuestions';
import styles from '../styles/EndGamePage.module.css';

const EndGamePage = () => {
  const [score, setScore] = useState(null);
  const [responsesCorrectsDatas, setResponsesCorrectsDatas] = useState(null);
  const [modalQuestions, setModalQuestions] = useState(null);
  const [title, setTitle] = useState(
    score > 6 ? 'Parabéns!!' : 'Você não foi muito bem desta vez!'
  );
  const [motivationalPharse, setMotivationalPharse] = useState(
    score > 6
      ? 'O seu ranking está subindo não é mesmo?'
      : 'O que está acontecendo meu jovem? Jesus Christ!!'
  );

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
          setScore(responseCorrectDatas.length);
          setResponsesCorrectsDatas(responseCorrectDatas);
        }
      }
    };

    getDatas();
  }, [data]);

  const handlePlayAgain = async () => {
    const categoryAtuall = await getCategoryAtuall(data.uid);

    if (categoryAtuall) {
      setCategory(categoryAtuall);
      postPlaying(true, data.uid);
      postCategoryAtuall(categoryAtuall, data.uid);
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

        <button
          style={{ marginTop: '1rem' }}
          onClick={() => setModalQuestions(true)}
        >
          Questões que acertou
        </button>
      </main>

      {modalQuestions && (
        <ModalQuestions setModalQuestions={setModalQuestions} responsesCorrectsDatas={responsesCorrectsDatas} />
      )}
    </>
  );
};

export default EndGamePage;
