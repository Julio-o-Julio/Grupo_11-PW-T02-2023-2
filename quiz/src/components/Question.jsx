import styles from '../styles/Question.module.css';

const Question = ({ children, description, typeDescription }) => {
  return (
    <section className={`${styles.questionBox} sectionDarkTheme`}>
      <p>{children}</p>
      {typeDescription === 'img' ? (
        <img
          src={description}
          alt="Descrição"
          style={{ minWidth: 200, maxWidth: 500 }}
        />
      ) : (
        <span>
          <p className={styles.descriptionText}>{description}</p>
        </span>
      )}
    </section>
  );
};

export default Question;
