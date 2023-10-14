import ButtonAbout from '../components/ButtonAbout';
import ButtonAchievements from '../components/ButtonAchievements';
import ButtonPlay from '../components/ButtonPlay';
import ButtonRanking from '../components/ButtonRanking';
import Profile from '../components/Profile';
import YourRanking from '../components/YourRanking';

import { Center } from '../styles';

const Home = () => {
  const uid = 'sOAcjF4TZFedF7tgyvLqyDrdL6T2';

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
