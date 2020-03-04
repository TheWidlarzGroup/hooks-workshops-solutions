import { useState, useEffect } from 'react';

interface FullName {
  name: {
    first: string;
    last: string;
  };
}

export const useSuggestions = (searchString: string, data: any[]) => {
  const [suggestions, setSuggestions] = useState<any[]>([]);

  //   create an array of full names e.g. "John Smith"
  const fullNameArray = data.map(
    (elem: FullName) => `${elem.name.first} ${elem.name.last}`
  );

  useEffect(() => {
    const loweredSearchString = searchString.toLowerCase();

    const suggestionArray = fullNameArray.filter(elem => {
      return elem.toLowerCase().includes(loweredSearchString);
    });

    setSuggestions(suggestionArray);
  }, [searchString]);

  return { suggestions };
};
