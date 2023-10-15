import ButtonAbout from '../components/ButtonAbout';
import ButtonAchievements from '../components/ButtonAchievements';
import ButtonPlay from '../components/ButtonPlay';
import ButtonRanking from '../components/ButtonRanking';
import Profile from '../components/Profile';
import YourRanking from '../components/YourRanking';

import { Center } from '../styles';

const Home = () => {
  const uid = '2gLNleMaoTT6vukT9ReWkSFwfen1';

  return (
    <>
      <Profile uid={uid} />
      <YourRanking uid={uid} />
      <Center>
        <ButtonPlay />
        <ButtonRanking />
        <ButtonAchievements />
      </Center>
      <ButtonAbout />
    </>
  );
};

export default Home;
