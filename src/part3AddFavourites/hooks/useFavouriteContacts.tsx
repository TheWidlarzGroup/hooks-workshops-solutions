import { useState } from "react";

export const useFavouriteContacts = (): [string[], (data: any) => void] => {
  const [saved, setSaved] = useState<string[]>(() => {
    const valueFromLocal = localStorage.getItem("favs");

    if (!valueFromLocal) {
      localStorage.setItem("favs", JSON.stringify([]));
    }

    return valueFromLocal ? JSON.parse(valueFromLocal ?? []) : [];
  });

  const update = (value: any) => {
    const valueToAdd = value instanceof Function ? value(saved) : value;
    localStorage.setItem("favs", JSON.stringify(valueToAdd));
    setSaved(valueToAdd);
  };

  return [saved, update];
};
