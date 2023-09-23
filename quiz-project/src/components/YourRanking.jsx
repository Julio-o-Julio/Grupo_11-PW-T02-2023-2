import { StyledYourRanking, Center } from "../styles";
import MotivationalPhrase from "./MotivationalPhrase";

function getRanking(user) {
  return user.ranking + "°";
}

const YourRanking = ({ user }) => {
  return (
    <Center>
      <StyledYourRanking key={user.id}>
        Seu Ranking global
        <span>{getRanking(user)}</span>
      </StyledYourRanking>
      <MotivationalPhrase ranking={user.ranking} />
    </Center>
  );
};

export default YourRanking;
