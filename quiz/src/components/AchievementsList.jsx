import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { getAchievements, getUserAchievements } from '../services/api';
import Star from '../components/svgs/Star';
import ButtonReturn from '../components/ButtonReturn';
import styles from '../styles/AchievementsList.module.css';

const AchievementsList = () => {
  const [achievements, setAchievements] = useState([]);
  const [userAchievements, setUserAchievements] = useState([]);

  const { data } = useContext(UserContext);

  useEffect(() => {
    const attAchievements = async () => {
      const achievements = await getAchievements();

      if (achievements) setAchievements(achievements);

      const userAchievements = await getUserAchievements(data.uid);

      if (userAchievements) setUserAchievements(userAchievements);
    };

    attAchievements();
  }, [data]);

  return (
    <>
      <ButtonReturn />
      <section
        className={`${styles.container} container articleBox animationBottom`}
      >
        <h1>Conquistas</h1>

        {achievements.map((achievement) => {
          let itsDone = false;

          if (userAchievements.includes(achievement.id)) itsDone = true;

          return (
            <article key={achievement.id} className={styles.item}>
              <p>{achievement.name}</p>
              <section className={styles.content}>
                <Star type={itsDone ? 'golden' : 'normal'} />
                <p>{itsDone ? 1 : 0}/1</p>
                <Star type={itsDone ? 'golden' : 'normal'} />
              </section>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default AchievementsList;
