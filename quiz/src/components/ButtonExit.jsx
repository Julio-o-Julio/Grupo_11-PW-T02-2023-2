import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import ModalExit from './ModalExit';
import {
  deleteCategoryAtuall,
  deleteCurrentGameData,
  deleteQuestionIdAtuall,
  postPlaying
} from '../services/api';

const ButtonExit = () => {
  const [modalExit, setModalExit] = useState(null);
  const [endGame, setEndGame] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { setCategory, data } = useContext(UserContext);

  useEffect(() => {
    if (location.pathname === '/game/endgame') setEndGame(true);
  }, [location]);

  const handleExit = () => {
    postPlaying(false, data.uid);
    deleteQuestionIdAtuall(data.uid);
    deleteCategoryAtuall(data.uid);
    deleteCurrentGameData(data.uid);
    setCategory(null);
    navigate('/');
  };

  return (
    <>
      <button
        className="buttonDarkTheme"
        style={{ margin: '2rem auto 0.5rem' }}
        onClick={() => setModalExit(true)}
      >
        Sair
      </button>
      {modalExit && (
        <ModalExit
          setModalExit={setModalExit}
          handleExit={handleExit}
          endGame={endGame}
        />
      )}
    </>
  );
};

export default ButtonExit;
