import React from "react";
import { ContactData } from "../../types/contact.types";
import Contact from "./Contact";

interface Props {
  contacts: ContactData[];
}

const ContactList = ({ contacts }: Props) => {
  return (
    <ul style={styles.list}>
      {contacts.map((contact: ContactData) => (
        <Contact key={contact.login.uuid} contact={contact} />
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
