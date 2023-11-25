import { getUserAchievements, postUserAchievements } from '../services/api';

const checkAchievements = async (category, score, userId) => {
  const userAchievements = await getUserAchievements(userId);

  if (userAchievements) {
    if (!userAchievements.includes(1) && category === 'all' && score === 5)
      await postUserAchievements(1, userId);
    if (
      !userAchievements.includes(2) &&
      category === 'programming' &&
      score === 5
    )
      await postUserAchievements(2, userId);
    if (!userAchievements.includes(3) && category === 'hardware' && score === 5)
      await postUserAchievements(3, userId);
    if (
      !userAchievements.includes(4) &&
      category === 'historycomputing' &&
      score === 5
    )
      await postUserAchievements(4, userId);
    if (!userAchievements.includes(5) && category === 'all')
      await postUserAchievements(5, userId);
    if (!userAchievements.includes(6) && category === 'programming')
      await postUserAchievements(6, userId);
    if (!userAchievements.includes(7) && category === 'hardware')
      await postUserAchievements(7, userId);
    if (!userAchievements.includes(8) && category === 'historycomputing')
      await postUserAchievements(8, userId);
  }
};

export default checkAchievements;
