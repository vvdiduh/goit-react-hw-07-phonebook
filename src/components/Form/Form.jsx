import styles from './form.module.css';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [state, setState] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState({ name: '', number: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span className={styles.span}>Ім'я</span>
        <input
          type="text"
          name="name"
          value={state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        <span className={styles.span}>Номер телефону</span>
        <input
          type="tel"
          name="number"
          value={state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={styles.btn} type="submit">
        Додати контакт
      </button>
    </form>
  );
};

export default Form;
