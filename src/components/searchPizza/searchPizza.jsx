import styles from './searchPizza.module.sass';
import { useRef } from 'react';
import { SearchContext } from '../../App';
import { useContext } from 'react';

const SearchPizza = () => {
  const { inputValue, setInputValue } = useContext(SearchContext);

  const inputRef = useRef();
  const onClear = () => {
    setInputValue('');
    inputRef.current.focus();
  };
  return (
    <div className={styles.form}>
      <svg
        className={styles.svg}
        id="_x30_1"
        version="1.1"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M500.284,443.716l-81.839-81.839c26.117-37.251,41.481-82.592,41.555-131.523c0.189-125.3-100.912-228.299-226.196-230.323  C103.766-2.07-2.07,103.767,0.031,233.804C2.055,359.088,105.054,460.188,230.354,460c48.931-0.074,94.272-15.438,131.523-41.555  c0,0,81.839,81.839,81.839,81.839c15.621,15.621,40.948,15.621,56.568,0h0C515.905,484.663,515.905,459.337,500.284,443.716z   M230,380c-82.71,0-150-67.29-150-150S147.29,80,230,80s150,67.29,150,150S312.71,380,230,380z" />
      </svg>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className={styles.input}
        type="text"
        placeholder="Введите название пиццы..."
      />
      <svg
        className={styles.decline}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => onClear()}>
        <g data-name="Layer 2" id="Layer_2">
          <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
          <path d="M11.76,21.24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41l8.49-8.49A1,1,0,0,1,21,12.46L12.46,21A1,1,0,0,1,11.76,21.24Z" />
          <path d="M20.24,21.24a1,1,0,0,1-.7-.29l-8.49-8.49a1,1,0,0,1,1.41-1.41L21,19.54A1,1,0,0,1,21,21,1,1,0,0,1,20.24,21.24Z" />
        </g>
      </svg>
    </div>
  );
};

export default SearchPizza;
