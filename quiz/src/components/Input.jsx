import styles from '../styles/Input.module.css';

const Input = ({ name, label, value, type, onChange, onBlur, error }) => {
  return (
    <section className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        className={styles.input}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.inputError}>{error}</p>}
    </section>
  );
};

export default Input;
