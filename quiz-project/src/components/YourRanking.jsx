import { StyledYourRanking, Center } from '../styles';
import MotivationalPhrase from './MotivationalPhrase';

const getRanking = (uid) => {
  return 2;
};

const YourRanking = ({ uid }) => {
  const ranking = getRanking(uid);

  return (
    <Center>
      <StyledYourRanking key={uid}>
        Seu Ranking global
        <span>{ranking + '°'}</span>
      </StyledYourRanking>
      <MotivationalPhrase ranking={ranking} />
    </Center>
  );
};

export default YourRanking;
