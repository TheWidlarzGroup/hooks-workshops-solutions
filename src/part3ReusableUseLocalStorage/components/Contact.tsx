import React from "react";
import { ContactData } from "../../types/contact.types";

interface Props {
  contact: ContactData;
  isFav: boolean;
  addContactToFavourites: (data: string) => void;
}

const Contact = ({ contact, isFav, addContactToFavourites }: Props) => {
  return (
    <li style={styles.container}>
      <div
        style={{
          ...styles.contactData,
          color: isFav ? "red" : "black"
        }}
      >
        <p>
          {contact.name.title} {contact.name.first} {contact.name.last}{" "}
          {isFav && "FAV"}
        </p>
      </div>
      <div
        onClick={() => addContactToFavourites(contact.login.uuid)}
        style={styles.contactShowMore}
      >
        {"<3"}
      </div>
    </li>
  );
};

const styles = {
  container: {
    padding: 10,
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between"
  },
  contactData: {
    position: "relative" as "relative"
  },
  contactFav: {
    color: "red"
  },
  contactShowMore: {
    position: "relative" as "relative",
    fontSize: 12,
    display: "flex",
    alignItems: "center"
  }
};

export default Contact;
