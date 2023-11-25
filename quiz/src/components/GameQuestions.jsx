import { useCallback, useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import {
  getQuestionRandom,
  getQuestionIdAtuall,
  getQuestion,
  postQuestionIdAtuall,
  getCategoryAtuall,
  getCurrentGameData,
  postCurrentGameData,
  deleteQuestionIdAtuall,
  postPlaying,
  getEndGame
} from '../services/api';
import Question from './Question';
import Responses from './Responses';
import { useNavigate } from 'react-router-dom';

const GameQuestions = () => {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [responses, setResponses] = useState([]);
  const [questionId, setQuestionId] = useState(null);
  const [responseId, setResponseId] = useState(null);
  const [questionData, setQuestionData] = useState({});

  const { data } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const attGameDatas = async () => {
      const storedQuestionDatas = await getCurrentGameData(data.uid);
      const questionDatas = [...storedQuestionDatas, questionData];
      console.log(questionDatas);

      await postCurrentGameData(questionDatas, data.uid);
    };

    if (data && questionData && Object.keys(questionData).length > 0) {
      attGameDatas();
    }
  }, [questionData, data]);

  const fetchQuestionData = useCallback(async () => {
    setQuestion('');
    setDescription('');
    setResponses([]);
    setResponseId(null);

    const category = await getCategoryAtuall(data.uid);
    const questionIdAtuall = await getQuestionIdAtuall(data.uid);
    let questionData = null;

    if (category && questionIdAtuall != 0) {
      questionData = await getQuestion(category, questionIdAtuall);
    } else {
      questionData = await getQuestionRandom(category, data.uid);
      await postQuestionIdAtuall(questionData.id, data.uid);
    }

    if (questionData) {
      setQuestion(questionData.question);
      setQuestionId(questionData.id);
      setDescription(questionData.description);
      setResponses(questionData.responses);
    }
  }, [data.uid]);

  useEffect(() => {
    const updateQuestionData = async () => {
      const categoryAtuall = await getCategoryAtuall(data.uid);

      if (categoryAtuall) {
        setQuestionData({
          category: categoryAtuall,
          questionId: questionId,
          responseId: responseId
        });
      }
    };

    if (responseId) updateQuestionData();
  }, [responseId, questionId, data]);

  useEffect(() => {
    const attQuestionData = async () => {
      await deleteQuestionIdAtuall(data.uid);
      await postPlaying(false, data.uid);
      await fetchQuestionData();
    };

    const fetchQuestion = async () => {
      await postPlaying(true, data.uid);
      await fetchQuestionData();
    };

    const checkEndGame = async () => {
      const endGame = await getEndGame(data.uid);

      if (endGame) {
        await postPlaying(false, data.uid);
        await deleteQuestionIdAtuall(data.uid);
        navigate('/game/endgame');

        return endGame;
      }
    };

    checkEndGame();

    if (responseId) {
      attQuestionData();
    } else {
      fetchQuestion();
    }
  }, [fetchQuestionData, responseId, data, navigate]);

  return (
    <section className="container">
      <Question
        description={description}
        typeDescription={
          description.includes('https://blogger') ? 'img' : 'text'
        }
      >
        {question}
      </Question>
      <Responses responses={responses} setResponseId={setResponseId} />
    </section>
  );
};

export default GameQuestions;
