import React, { useState } from 'react';
import { ContactData } from '../../types/contact.types';
import { useSuggestions } from '../hooks/useSuggestions';

interface Props {
  inputValue: string;
  setInputValue: (data: string) => void;
  contacts: ContactData[];
}

const SearchBar = ({ inputValue, setInputValue, contacts }: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const { suggestions } = useSuggestions(inputValue, contacts);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputValue(value);
    value !== '' ? setShowOptions(true) : setShowOptions(false);
  };

  return (
    <div style={styles.container}>
      <input
        placeholder='Type in the full name'
        style={styles.input}
        value={inputValue}
        onChange={handleChange}
      />
      {showOptions && (
        <div>
          {suggestions.slice(0, 5).map(suggestion => (
            <div key={suggestion} style={styles.optionItem}>
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column' as any,
    height: 'auto',
    width: 400,
    backgroundColor: '#90EE90'
  },
  input: {
    display: 'inline-block',
    padding: 15,
    fontSize: 20,
    border: '1px solid #000'
  },
  optionsDiv: {
    width: '100%',
    border: '1px solid #000'
  },
  optionItem: {
    width: '100%',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default SearchBar;
