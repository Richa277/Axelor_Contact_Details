import { useState } from "react";
import ContactsList from "./ContactsList";
import CreateContactForm from "./CreateContactForm";
import styles from "./Contacts.module.css";

function Contacts() {
  const [create, setCreate] = useState(false);

  const handleAddNewContact = () => {
    setCreate(true);
  };

  return (
    <div className={styles.list}>
      <button onClick={handleAddNewContact} className={styles.add}>
        New Contact
      </button>
      {create ? <CreateContactForm /> : <ContactsList />}
    </div>
  );
}

export default Contacts;
