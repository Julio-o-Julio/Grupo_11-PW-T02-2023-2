import getUser from './getUser';

const getAverage = async (uid) => {
  try {
    const user = await getUser(uid);
    const scores = user.scores;

    if (scores.length === 0) return 0;

    const sum = scores.reduce((accumulator, currentScore) => {
      return accumulator + currentScore;
    }, 0);

    const average = sum / scores.length;

    return average;
  } catch (error) {
    console.error('Erro ao calcular a média:', error);

    throw error;
  }
};

export default getAverage;
