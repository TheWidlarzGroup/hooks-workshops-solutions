import React from "react";

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
    <input
      placeholder="Type in the full name"
      style={styles.input}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

const styles = {
  input: {
    display: "block",
    margin: "0 auto"
  }
};

export default SearchBar;
