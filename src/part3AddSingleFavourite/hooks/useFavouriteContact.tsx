import { useState } from "react";

export const useFavouriteContact = (): [string, (data: string) => void] => {
  const [saved, setSaved] = useState<string>(() => {
    const valueFromLocal = localStorage.getItem("fav");

    if (!valueFromLocal) {
      localStorage.setItem("fav", "");
    }

    return valueFromLocal ? valueFromLocal : "";
  });

  const update = (value: string) => {
    localStorage.setItem("fav", value);
    setSaved(value);
  };

  return [saved, update];
};
