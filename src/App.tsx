import React from "react";
import { ContactData } from "./types/contact.types";
import ContactList from "./components/ContactList";

const contacts: ContactData[] = require("./data/contacts.json").results;

function App() {
  return (
    <>
      <h1>My contacts</h1>
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
