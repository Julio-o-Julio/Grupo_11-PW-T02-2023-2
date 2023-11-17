import styles from '../styles/Responses.module.css';

const Responses = ({ responses, setResponseId }) => {
  const handleResponseId = (responseId) => {
    if (setResponseId) setResponseId(responseId);
  };

  return (
    <section className={styles.responses}>
      {responses.map((response) => (
        <button
          key={response.id}
          className={styles.buttonResponse}
          onClick={() => handleResponseId(response.id)}
        >
          {response.response}
        </button>
      ))}
    </section>
  );
};

export default Responses;
