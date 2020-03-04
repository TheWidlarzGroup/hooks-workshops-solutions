import { useState } from "react";

export const useFavouriteContact = (id: string) => {
  const [savedValue, setSavedValue] = useState(() => {
    try {
      const valueFromLocal = localStorage.getItem("favouriteContact");

      if (!valueFromLocal) {
        localStorage.setItem("favouriteContact", JSON.stringify(id));
      }

      return valueFromLocal ? valueFromLocal : id;
    } catch (e) {}
  });
};
