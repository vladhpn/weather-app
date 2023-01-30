import { useState } from 'react';
import styles from './styles.module.scss';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    const regMatch = /^[a-zA-Z]*$/.test(value);

    if (regMatch) {
      setQuery(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={query}
          onChange={handleChange}
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search city'
              >
        </input>
      </form>
    </div>
  );
};

export default SearchBar;
