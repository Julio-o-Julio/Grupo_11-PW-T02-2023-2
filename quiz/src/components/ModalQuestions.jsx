import { useContext, useEffect, useState } from 'react';
import styles from '../styles/ModalQuestions.module.css';
import { getQuestion } from '../services/api';
import { UserContext } from '../contexts/UserContext';
import Responses from './Responses';
import Question from './Question';

const ModalQuestions = ({ setModalQuestions, responsesCorrectsDatas }) => {
  const [questions, setQuestions] = useState([]);

  const { data } = useContext(UserContext);

  useEffect(() => {
    const getQuestionsData = async () => {
      const newQuestions = [];
      setQuestions([]);

      for (const responseCorrect of responsesCorrectsDatas) {
        const questionId = responseCorrect.questionId;
        const primaryNumberQuestionId = Math.floor(questionId / 10);
        let category;

        switch (primaryNumberQuestionId) {
          case 1:
            category = 'programming';
            break;
          case 2:
            category = 'hardware';
            break;
          default:
            category = 'historycomputing';
        }

        const questionCorrect = await getQuestion(category, questionId);

        if (questionCorrect) {
          newQuestions.push(questionCorrect);
        }
      }

      setQuestions((prevQuestions) => [...prevQuestions, ...newQuestions]);
    };

    if (responsesCorrectsDatas.length > 0) {
      getQuestionsData();
    }
  }, [responsesCorrectsDatas, data]);

  console.log(questions);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalQuestions(null);
  };

  return (
    <section className={styles.modalQuestions} onClick={handleOutsideClick}>
      <article className={`${styles.contentModal} sectionDarkTheme`}>
        <h1 className={styles.title}>Questões que acertou:</h1>

        {questions.length > 0 &&
          questions.map((question, index) => {
            return (
              <section key={index}>
                <Question
                  description={question.description}
                  typeDescription={
                    question.description.includes('https://blogger')
                      ? 'img'
                      : 'text'
                  }
                >
                  {question.question}
                </Question>
                <Responses responses={question.responses} />
              </section>
            );
          })}
      </article>
    </section>
  );
};

export default ModalQuestions;
