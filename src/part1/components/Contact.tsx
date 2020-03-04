import React, { useState } from "react";
import { ContactData } from "../../types/contact.types";

interface Props {
  contact: ContactData;
}

const Contact = ({ contact }: Props) => {
  const [hover, setHover] = useState(false);

  const showDetails = () => setHover(true);
  const hideDetails = () => setHover(false);

  return (
    <li style={styles.container}>
      <div style={styles.contactData}>
        <p>
          {contact.name.title} {contact.name.first} {contact.name.last}
        </p>
      </div>
      <div
        style={styles.contactShowMore}
        onMouseEnter={showDetails}
        onMouseLeave={hideDetails}
      >
        Show e-mail
        <div
          style={{
            ...styles.contactDetails,
            display: hover ? "block" : "none"
          }}
        >
          {contact.email}
        </div>
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
  contactShowMore: {
    position: "relative" as "relative",
    fontSize: 12,
    display: "flex",
    alignItems: "center"
  },
  contactDetails: {
    backgroundColor: "white",
    border: "1px solid black",
    position: "absolute" as "absolute",
    top: "20%",
    right: "100%",
    display: "none",
    padding: 10,
    zIndex: 2
  }
};

export default Contact;
