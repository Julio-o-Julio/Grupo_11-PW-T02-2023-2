import ButtonAbout from "../components/ButtonAbout";
import ButtonAchievements from "../components/ButtonAchievements";
import ButtonPlay from "../components/ButtonPlay";
import ButtonRanking from "../components/ButtonRanking";
import Profile from "../components/Profile";
import YourRanking from "../components/YourRanking";

import { User } from "../helpers/User";
import { Center } from "../styles";

const id = 0;

function getUser(id) {
  const user = User.find((user) => user.id === id);
  
  return user;
}

const Home = () => {
  return (
    <>
      <Profile user={getUser(id)} />
      <YourRanking user={getUser(id)} />
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
