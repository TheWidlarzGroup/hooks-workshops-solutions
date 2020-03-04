import { useState } from "react";

export const useLocalStorage = (key: string, initValue: any) => {
  const [savedValue, setSavedValue] = useState(() => {
    try {
      const valueFromLocal = localStorage.getItem(key);

      if (!valueFromLocal) {
        localStorage.setItem(key, JSON.stringify(initValue));
      }

      return valueFromLocal ? JSON.parse(valueFromLocal) : initValue;
    } catch (e) {
      console.log(`Could not fetch the data from local storage for ${key} key`);
      console.log(e.message);
      localStorage.setItem(key, JSON.stringify(initValue));
      return initValue;
    }
  });

  const updateLocalStorage = (value: any) => {
    try {
      const valueToSave = value instanceof Function ? value(savedValue) : value;
      localStorage.setItem(key, JSON.stringify(valueToSave));
      setSavedValue(valueToSave);
    } catch (e) {
      console.log(`Could not update the local storage for key ${key} key`);
      console.log(e.message);
    }
  };

  return [savedValue, updateLocalStorage];
};
