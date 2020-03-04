import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import { ContactData } from "../types/contact.types";
import SearchBar from "./components/SearchBar";

const contacts: ContactData[] = require("./../data/contacts.json").results;

const Part1 = () => {
  const [inputValue, setInputValue] = useState("");

  const filtered =
    inputValue.length > 0
      ? contacts.filter((contact: ContactData) =>
          contact.name.first
            .toLocaleLowerCase()
            .includes(inputValue.toLowerCase())
        )
      : contacts;

  return (
    <>
      <h1 style={styles.titleStyle}>My contacts</h1>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <div style={styles.container}>
        <ContactList contacts={filtered} />
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

export default Part1;
