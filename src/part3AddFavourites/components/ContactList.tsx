import React from "react";
import { ContactData } from "../../types/contact.types";
import Contact from "./Contact";
import { useFavouriteContacts } from "../hooks/useFavouriteContacts";

interface Props {
  contacts: ContactData[];
}

const ContactList = ({ contacts }: Props) => {
  const [favs, setFavs] = useFavouriteContacts();

  const addContactToFavourites = (id: string) => {
    if (favs.includes(id)) {
      setFavs((prev: string[]) => prev.filter((favId: string) => favId !== id));
    } else {
      setFavs((prev: string[]) => [...prev, id]);
    }
  };

  return (
    <ul style={styles.list}>
      {contacts.map((contact: ContactData) => (
        <Contact
          addContactToFavourites={addContactToFavourites}
          isFav={favs.includes(contact.login.uuid)}
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
