import React, { useState } from 'react';

interface Props {
  inputValue: string;
  setInputValue: (data: string) => void;
}

const SearchBar = ({ inputValue, setInputValue }: Props) => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputValue(value);
  };

  return (
    <div style={styles.container}>
      <input
        placeholder='Type in the full name'
        style={styles.input}
        value={inputValue}
        onChange={handleChange}
      />
      <div>
        <div style={styles.optionItem}>Contact 1</div>
        <div style={styles.optionItem}>Contact 2</div>
        <div style={styles.optionItem}>Contact 3</div>
        <div style={styles.optionItem}>Contact 4</div>
        <div style={styles.optionItem}>Contact 5</div>
      </div>
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
