import React from "react";
import ContactList from "./components/ContactList";
import { ContactData } from "../types/contact.types";

const contacts: ContactData[] = require("./../data/contacts.json").results;

const Part3ReusableUseLocalStorage = () => {
  return (
    <>
      <h1 style={styles.titleStyle}>Reusable</h1>
      <div style={styles.container}>
        <ContactList contacts={contacts} />
      </div>
    </>
  );
};

const styles = {
  titleStyle: {
    textAlign: "center" as "center"
  },
  container: {
    width: "100%",
    maxWidth: 900,
    margin: "0 auto"
  }
};

export default Part3ReusableUseLocalStorage;
