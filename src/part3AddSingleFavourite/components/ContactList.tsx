import React from "react";
import { ContactData } from "../../types/contact.types";
import Contact from "./Contact";
import { useFavouriteContact } from "../hooks/useFavouriteContact";

interface Props {
  contacts: ContactData[];
}

const ContactList = ({ contacts }: Props) => {
  const [fav, setFav] = useFavouriteContact();

  const addContactToFavourites = (id: string) => {
    if (fav === id) {
      setFav("");
    } else {
      setFav(id);
    }
  };

  return (
    <ul style={styles.list}>
      {contacts.map((contact: ContactData) => (
        <Contact
          addContactToFavourites={addContactToFavourites}
          isFav={fav === contact.login.uuid}
          key={contact.login.uuid}
          contact={contact}
        />
      ))}
    </ul>
  );
};

const styles = {
  list: {
    padding: 0
  }
};

export default ContactList;
