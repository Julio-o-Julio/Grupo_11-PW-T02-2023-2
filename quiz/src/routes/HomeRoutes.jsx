import { Route, Routes } from 'react-router-dom';
import HomeMain from '../components/HomeMain';
import UserProfile from '../components/UserProfile';
import ChangeDataForm from '../components/ChangeDataForm';
import PageNotFound from '../pages/PageNotFound';
import GlobalRankingList from '../components/GlobalRankingList';
import AchievementsList from '../components/AchievementsList';

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeMain />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/changedata" element={<ChangeDataForm />} />
      <Route path="/globalranking" element={<GlobalRankingList />} />
      <Route path="/achievements" element={<AchievementsList />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default HomeRoutes;
