import React from "react";
import { ContactData } from "../types/contact.types";
import Contact from "./Contact";

interface Props {
  contacts: ContactData[];
}

const ContactList = ({ contacts }: Props) => {
  return (
    <ul>
      {contacts.map((contact: ContactData, i: number) => (
        <Contact contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
