import { Route, Routes } from 'react-router-dom';
import EndGamePage from '../pages/EndGamePage';
import GameQuestions from '../components/GameQuestions';

const GameRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/category/all" element={<GameQuestions />} />
        <Route path="/category/programming" element={<GameQuestions />} />
        <Route path="/category/hardware" element={<GameQuestions />} />
        <Route path="/category/historycomputing" element={<GameQuestions />} />
        <Route path="/endgame" element={<EndGamePage />} />
      </Routes>
    </>
  );
};

export default GameRoutes;
