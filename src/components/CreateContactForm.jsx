import { useState } from "react";
import { createData } from "../services/CreateData";

function CreateContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    createData(
      "/bi-pivot/ws/rest/com.axelor.contact.db.Contact",
      firstName,
      lastName,
      email,
      contact
    );
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First name"
          required
          onChange={handleFirstName}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={handleLastName}
          required
        />
        <input
          type="email"
          placeholder=" Email"
          onChange={handleEmail}
          required
        />
        <input
          type="number"
          placeholder="Phone No."
          onChange={handleContact}
          required
        />
        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  );
}
export default CreateContactForm;
