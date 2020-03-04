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

  return <input value={inputValue} onChange={handleChange} />;
};

export default SearchBar;
