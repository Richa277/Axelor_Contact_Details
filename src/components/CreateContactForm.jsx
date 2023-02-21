import { useState } from "react";
import { postData } from "../services/PostData";

function CreateContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    const response = postData(
      "/bi-pivot/ws/rest/com.axelor.contact.db.Contact",
      firstName,
      lastName,
      email
    );
    response
      .then(function (result) {
        console.log("result");
      })
      .catch(function (error) {
        console.log("error");
      });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First name"
          onChange={handleFirstName}
        />
        <input type="text" placeholder="Last name" onChange={handleLastName} />
        <input type="email" placeholder=" Email" onChange={handleEmail} />
        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  );
}
export default CreateContactForm;
