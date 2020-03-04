import { useState, useEffect, useMemo } from 'react';

interface FullName {
  name: {
    first: string;
    last: string;
  };
}

export const useSuggestions = (searchString: string, data: any[]) => {
  const [suggestions, setSuggestions] = useState<any[]>([]);

  //   create an array of full names e.g. "John Smith"
  const fullNameArray = useMemo(
    () => data.map((elem: FullName) => `${elem.name.first} ${elem.name.last}`),
    [data]
  );

  useEffect(() => {
    const loweredSearchString = searchString.toLowerCase();

    const suggestionArray = fullNameArray.filter(elem => {
      return elem.toLowerCase().includes(loweredSearchString);
    });

    setSuggestions(suggestionArray);
  }, [searchString, fullNameArray]);

  return { suggestions };
};
